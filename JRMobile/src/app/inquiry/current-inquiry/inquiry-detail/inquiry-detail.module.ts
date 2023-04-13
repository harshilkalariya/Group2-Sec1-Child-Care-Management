import { HeaderOnScroll } from './../../../directives/header-on-scroll.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InquiryDetailPageRoutingModule } from './inquiry-detail-routing.module';
import { InquiryDetailPage } from './inquiry-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InquiryDetailPageRoutingModule,
    HeaderOnScroll
  ],
  declarations: [InquiryDetailPage]
})
export class InquiryDetailPageModule { }
