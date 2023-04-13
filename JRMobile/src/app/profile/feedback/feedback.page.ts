import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FeedbackData } from 'src/app/models/login.model';
import { FeedbackService } from 'src/app/service/feedback/feedback.service';
import { ToastService } from 'src/app/service/toast/toast.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

  feedbackOption: string[] = ['About child', 'About instructor', 'Other']
  feedbackType: string = '';
  feedbackDesc: string = '';
  descLength: number = 0


  constructor(
    private toastService: ToastService,
    private feedBackService: FeedbackService,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  calculateLength() {
    this.descLength = this.feedbackDesc.length
  }

  async submitFeedback() {
    if (this.feedbackType && this.feedbackDesc) {
      let feedBack: FeedbackData = {
        type: this.feedbackType,
        desc: this.feedbackDesc
      }
      const alert = await this.alertController.create({
        header: 'Are you sure to send feedback?',
        buttons: [
          {
            text: 'Close',
            role: 'cancel',
            handler: () => { }
          },
          {
            text: 'Confirm',
            role: 'confirm',
            cssClass: 'alert-button-confirm',
            handler: async () => {
              await this.feedBackService.addFeedback(feedBack);
              this.toastService.success('Feedback sent.');
              this.router.navigate(['/tabs/profile']);
            },
          }
        ]
      }
      );
      await alert.present();
    } else {
      this.toastService.error('Fill all details for Feedback!');
    }
  }
}
