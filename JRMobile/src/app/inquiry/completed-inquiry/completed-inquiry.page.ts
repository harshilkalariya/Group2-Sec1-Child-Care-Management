import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';
import { InquiryStages } from 'src/app/constant/inquiryConstant';
import { InquiryList } from 'src/app/models/inquiry.model';
import { InquiryService } from 'src/app/service/inquiry/inquiry.service';
import { UtilService } from 'src/app/service/util/util.service';

@Component({
  selector: 'app-completed-inquiry',
  templateUrl: './completed-inquiry.page.html',
  styleUrls: ['./completed-inquiry.page.scss'],
})
export class CompletedInquiryPage implements OnInit {

  canShowList: boolean = false;
  globalSearchInput: string = '';
  pageNumber: number = 1;
  inquiryList: InquiryList[];
  allInquiryList: InquiryList[];
  totalInquiry: number = 0;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(
    private inquiryService: InquiryService,
    private utilService: UtilService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getCompetedInquiryList();
    this.allInquiryList = [...this.inquiryList];
  }

  async getCompetedInquiryList() {
    let list = await this.inquiryService.getComplitedInquiryList(this.pageNumber, this.globalSearchInput);
    this.inquiryList = list.list;
    this.totalInquiry = list.totalCount;
    this.canShowList = true;
  }

  getInquiryStageName(stage: string): string {
    return InquiryStages[stage].name;
  }

  async searchCompletedInquiry(event: any) {
    this.pageNumber = 1;
    this.globalSearchInput = event.target.value;
    await this.getCompetedInquiryList();
    this.allInquiryList = [...this.inquiryList];
    if (this.totalInquiry > this.pageNumber * 10) {
      this.infiniteScroll.disabled = false;
    }
  }

  async refrashCompletedInquiryList(event: any) {
    this.pageNumber = 1;
    this.globalSearchInput = '';
    try {
      await this.getCompetedInquiryList();
      this.allInquiryList = [...this.inquiryList];
      event.target.complete();
      if (this.totalInquiry > this.pageNumber * 10) {
        this.infiniteScroll.disabled = false;
      }
    } catch (error) { }
  }

  async loadMoreInquiry(event: any) {
    if (this.totalInquiry <= this.pageNumber * 10) {
      event.target.disabled = true;
    }
    this.pageNumber = this.pageNumber + 1;
    try {
      await this.getCompetedInquiryList();
      this.allInquiryList = [...this.allInquiryList, ...this.inquiryList];
      if (this.totalInquiry < this.pageNumber * 10) {
        event.target.disabled = true;
      }
      event.target.complete();
    } catch (error) { }

  }

  goToInquiryDetail(inquiry: any) {
    this.utilService.sendInquiry(inquiry);
    this.router.navigate(['/tabs/inquiry/completed-inquiry/completed-inquiry-detail']);
  }

}
