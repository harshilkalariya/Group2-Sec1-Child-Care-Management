import { HeaderOnScroll } from './../../directives/header-on-scroll.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CompletedInquiryPageRoutingModule } from './completed-inquiry-routing.module';
import { CompletedInquiryPage } from './completed-inquiry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletedInquiryPageRoutingModule,
    HeaderOnScroll
  ],

  declarations: [CompletedInquiryPage]
})
export class CompletedInquiryPageModule { }
