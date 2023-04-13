import { Subscription } from 'rxjs';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { InquiryDetails, InquiryList, InquiryResponse } from 'src/app/models/inquiry.model';
import { InquiryService } from 'src/app/service/inquiry/inquiry.service';
import { UtilService } from 'src/app/service/util/util.service';
import { ToastService } from 'src/app/service/toast/toast.service';
import { InquiryStages } from 'src/app/constant/inquiryConstant';
import { LocalStorageService } from 'src/app/service/local-storage/localstorage.service';
import { currentUser } from 'src/app/models/login.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-inquiry-detail',
  templateUrl: './inquiry-detail.page.html',
  styleUrls: ['./inquiry-detail.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InquiryDetailPage implements OnInit {

  ownerId: number;
  role: string;
  inquirySubscription: Subscription;

  canLoad: boolean = false

  selectedInquiry: InquiryList;
  selectedInquiryDetails: InquiryDetails;
  timeline: any[];
  timelineData: boolean = false;
  inquiryFeedback: string;
  inquiryResponse: InquiryResponse;

  constructor(
    private inquiryService: InquiryService,
    private utilService: UtilService,
    private router: Router,
    private toastService: ToastService,
    private localStorage: LocalStorageService,
    private alertController: AlertController
  ) { }

  async ngOnInit() {
    let currentUser: currentUser = await this.localStorage.getValue('currentUser');
    this.ownerId = currentUser.ownerId;
    this.role = currentUser.role

    this.inquirySubscription = this.utilService
      .getInquiry()
      .subscribe((res: any) => {
        if (res && !res.enquiryId) {
          this.router.navigate(['/tabs/inquiry/current-inquiry']);
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

  async responseToInquiry(response: string, inquiryId: number) {
    this.inquiryResponse = {
      id: inquiryId,
      status: response,
      desc: this.inquiryFeedback
    };
    try {
      let response = await this.inquiryService.changeInquiryStatus(this.inquiryResponse);
      this.toastService.success(response.message);
      this.inquiryFeedback = '';
      this.router.navigate(['/tabs/inquiry/current-inquiry']);
    } catch (error: any) {
      this.toastService.error(error.error.message);
    }
  }

  async holdAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure to Hold Project?',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => { }
        },
        {
          text: 'Confirm',
          role: 'confirm',
          cssClass: 'alert-button-confirm-danger',
          handler: async () => { await this.responseToInquiry('HOLD_BY_CLIENT', this.selectedInquiry.enquiryId) },
        }
      ]
    });

    await alert.present();

  }

  async cancelAlert() {
    const alert = await this.alertController.create({
      header: 'Are you sure to Cancel Project?',
      buttons: [
        {
          text: 'Close',
          role: 'cancel',
          handler: () => { }
        },
        {
          text: 'Confirm',
          role: 'confirm',
          cssClass: 'alert-button-confirm-danger',
          handler: async () => { await this.responseToInquiry("CANCEL_BY_CLIENT", this.selectedInquiry.enquiryId) },
        }
      ]
    });

    await alert.present();
  }

  ngOnDestroy() {
    this.inquirySubscription.unsubscribe();
  }
}
