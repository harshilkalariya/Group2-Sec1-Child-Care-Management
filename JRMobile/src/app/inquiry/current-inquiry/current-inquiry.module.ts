import { HeaderOnScroll } from './../../directives/header-on-scroll.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CurrentInquiryPageRoutingModule } from './current-inquiry-routing.module';
import { CurrentInquiryPage } from './current-inquiry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentInquiryPageRoutingModule,
    HeaderOnScroll
  ],
  declarations: [CurrentInquiryPage]
})
export class CurrentInquiryPageModule { }
