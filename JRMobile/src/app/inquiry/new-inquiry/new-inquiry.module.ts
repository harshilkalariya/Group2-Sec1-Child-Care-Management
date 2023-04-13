import { HeaderOnScroll } from './../../directives/header-on-scroll.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewInquiryPageRoutingModule } from './new-inquiry-routing.module';
import { NewInquiryPage } from './new-inquiry.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NewInquiryPageRoutingModule,
    HeaderOnScroll
  ],
  declarations: [NewInquiryPage]
})
export class NewInquiryPageModule { }
