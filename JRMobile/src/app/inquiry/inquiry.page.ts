import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.page.html',
  styleUrls: ['./inquiry.page.scss'],
})
export class InquiryPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToNewInquiry(){
    this.router.navigate(['/tabs/inquiry/new-inquiry']);
  }

  goToCurrentInquiry(){
    this.router.navigate(['/tabs/inquiry/current-inquiry']);
  }

  goToCompletedInquiry(){
    this.router.navigate(['/tabs/inquiry/completed-inquiry']);
  }
}
