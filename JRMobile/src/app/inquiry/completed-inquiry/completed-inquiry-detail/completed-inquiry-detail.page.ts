import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { InquiryStages } from 'src/app/constant/inquiryConstant';
import { InquiryDetails, InquiryList } from 'src/app/models/inquiry.model';
import { InquiryService } from 'src/app/service/inquiry/inquiry.service';
import { UtilService } from 'src/app/service/util/util.service';

@Component({
  selector: 'app-completed-inquiry-detail',
  templateUrl: './completed-inquiry-detail.page.html',
  styleUrls: ['./completed-inquiry-detail.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompletedInquiryDetailPage implements OnInit {

  inquirySubscription: Subscription;
  canLoad: boolean = false

  selectedInquiry: InquiryList;
  selectedInquiryDetails: InquiryDetails;
  timeline: any[];
  timelineData: boolean = false;

  constructor(
    private inquiryService: InquiryService,
    private utilService: UtilService,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.inquirySubscription = this.utilService
      .getInquiry()
      .subscribe((res: any) => {
        if (res && !res.enquiryId) {
          this.router.navigate(['/tabs/inquiry/completed-inquiry']);
        }
        if (res && res.enquiryId) {
          this.selectedInquiry = res;
          this.canLoad = true
          this.getInquiryDetailByInquiryId(this.selectedInquiry.enquiryId);
        }
      });
  }

  async getInquiryDetailByInquiryId(inquiryId: number) {
    this.selectedInquiryDetails =
      await this.inquiryService.getInquiryDetailByInquiryId(inquiryId);
    this.timeline = [
      {
        status: 'Inquiry Created On',
        date: this.selectedInquiryDetails.createdOn,
        desc: this.selectedInquiryDetails.description,
      },
      {
        status: 'Response By Company',
        date: this.selectedInquiryDetails.approveRejectDateByAdmin,
        desc: this.selectedInquiryDetails.jrDesc,
      },
      {
        status: 'Response By Client',
        date: this.selectedInquiryDetails.approveRejectDateBySiteManager,
        desc: this.selectedInquiryDetails.clientDesc,
      },
      {
        status: 'Provisioning',
        date: this.selectedInquiryDetails.provisioningDate,
        desc: this.selectedInquiryDetails.provisioningDesc,
      },
      {
        status: 'Requirement Collection',
        date: this.selectedInquiryDetails.requirementDate,
        desc: this.selectedInquiryDetails.requirementDesc,
      },
      {
        status: 'Installation',
        date: this.selectedInquiryDetails.installationDate,
        desc: this.selectedInquiryDetails.installationDesc,
      },
      {
        status: 'Commissioning & Training',
        date: this.selectedInquiryDetails.commissioningDate,
        desc: this.selectedInquiryDetails.commissionindDesc,
      },
      {
        status: 'Completed',
        date: this.selectedInquiryDetails.completedDate,
        desc: this.selectedInquiryDetails.completedDesc,
      },
    ];

    this.timelineData = true;
  }

  getInquiryStageName(stage: string): string {
    return InquiryStages[stage].name;
  }

  ngOnDestroy() {
    this.inquirySubscription.unsubscribe();
  }
}
