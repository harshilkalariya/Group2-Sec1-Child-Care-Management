import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll, Platform, NavController, IonContent } from '@ionic/angular';
import { InquiryStages } from 'src/app/constant/inquiryConstant';
import { InquiryList } from 'src/app/models/inquiry.model';
import { InquiryService } from 'src/app/service/inquiry/inquiry.service';
import { UtilService } from 'src/app/service/util/util.service';
import { currentUser } from 'src/app/models/login.model';
import { LocalStorageService } from 'src/app/service/local-storage/localstorage.service';

@Component({
  selector: 'app-current-inquiry',
  templateUrl: './current-inquiry.page.html',
  styleUrls: ['./current-inquiry.page.scss'],
})
export class CurrentInquiryPage implements OnInit {

  ownerId: number;
  role: string;

  canShowList: boolean = false;
  globalSearchInput: string = '';
  pageNumber: number = 1;
  inquiryList: InquiryList[];
  allInquiryList: InquiryList[];
  totalInquiry: number = 0;
  
  btnHandler: Subscription;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(
    private inquiryService: InquiryService,
    private utilService: UtilService,
    private router: Router,
    private navCtrl: NavController,
    private platform: Platform,
    private localStorage: LocalStorageService,
  ) { }

  async ngOnInit() {
    let currentUser: currentUser = await this.localStorage.getValue('currentUser');
    this.ownerId = currentUser.ownerId
    this.role = currentUser.role
   }

  async ionViewWillEnter() {
    this.content.scrollToTop();
    this.pageNumber = 1;
    this.globalSearchInput = '';
    await this.getCurrentInquiryList();
    this.allInquiryList = [...this.inquiryList];
    if (this.infiniteScroll) {
      this.infiniteScroll.disabled = false;
    }
    this.btnHandler = this.platform.backButton.subscribeWithPriority(1, () => {
      this.navCtrl.navigateBack("tabs/inquiry");
    });
  }

  async getCurrentInquiryList() {
    console.log('ongoing inquiry')
    let list = await this.inquiryService.getAllInquiryList(this.pageNumber, this.globalSearchInput);
    this.inquiryList = list.list;
    this.totalInquiry = list.totalCount;
    this.canShowList = true;
  }

  getInquiryStageName(stage: string): string {
    return InquiryStages[stage].name;
  }

  async searchCurrentInquiry(event: any) {
    this.pageNumber = 1;
    this.globalSearchInput = event.target.value;
    await this.getCurrentInquiryList();
    this.allInquiryList = [...this.inquiryList];
    if (this.totalInquiry > this.pageNumber * 10) {
      this.infiniteScroll.disabled = false;
    }
  }

  async refrashCurrentInquiryList(event: any) {
    this.pageNumber = 1;
    this.globalSearchInput = '';
    try {
      await this.getCurrentInquiryList();
      this.allInquiryList = [...this.inquiryList];
      event.target.complete();
      if (this.totalInquiry > this.pageNumber * 10) {
        this.infiniteScroll.disabled = false;
      }
    } catch (error) { }
  }

  async loadMoreCurrentInquiry(event: any) {
    if (this.totalInquiry <= this.pageNumber * 10) {
      event.target.disabled = true;
    }
    this.pageNumber = this.pageNumber + 1;
    try {
      await this.getCurrentInquiryList();
      this.allInquiryList = [...this.allInquiryList, ...this.inquiryList];
      if (this.totalInquiry <= this.pageNumber * 10) {
        event.target.disabled = true;
      }
      event.target.complete();
    } catch (error) { }
  }

  goToInquiryDetail(inquiry: any) {
    this.utilService.sendInquiry(inquiry);
    this.router.navigate(['/tabs/inquiry/current-inquiry/inquiry-detail']);
  }

  async ionViewDidLeave() {
    if (this.btnHandler) {
      this.btnHandler.unsubscribe();
    }
  }
}
