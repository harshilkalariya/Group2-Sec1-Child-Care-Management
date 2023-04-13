import { LocalStorageService } from './../service/local-storage/localstorage.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InquiryStages } from '../constant/inquiryConstant';
import { InquiryList } from '../models/inquiry.model';
import { currentUser } from '../models/login.model';
import { InquiryService } from '../service/inquiry/inquiry.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {
  userName: string;
  canLoad: boolean = false;
  greetMsg: string;

  inquiryList: InquiryList[];
  fourInquiry: InquiryList[];

  constructor(
    private router: Router,
    private inquiryService: InquiryService,
    private localStorage: LocalStorageService,
  ) {
    this.greetingsByTime()
  }

  async ngOnInit() {
    let currentUser: currentUser = await this.localStorage.getValue('currentUser');
    this.userName = currentUser.businessName;
    this.getCurrentInquiryList();
  }

  async getCurrentInquiryList() {
    let list = await this.inquiryService.getAllInquiryList(1, '');
    this.inquiryList = list.list;
    this.fourInquiry = this.inquiryList.slice(0, 4);
    this.canLoad = true;
  }

  getInquiryStageName(stage: string): string {
    return InquiryStages[stage].name;
  }

  viewAllRunningProject() {
    this.router.navigate(['/tabs/inquiry/current-inquiry']);
  }

  goToNewInquiry() {
    this.router.navigate(['/tabs/inquiry/new-inquiry']);
  }

  greetingsByTime() {
    let myDate = new Date();
    let hrs = myDate.getHours();

    if (hrs < 12)
      this.greetMsg = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
      this.greetMsg = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
      this.greetMsg = 'Good Evening';
  }
}
