import { HeaderOnScroll } from './../../../directives/header-on-scroll.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompletedInquiryDetailPageRoutingModule } from './completed-inquiry-detail-routing.module';
import { CompletedInquiryDetailPage } from './completed-inquiry-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedInquiryDetailPageRoutingModule,
    HeaderOnScroll
  ],
  declarations: [CompletedInquiryDetailPage]
})
export class CompletedInquiryDetailPageModule { }
