import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedInquiryDetailPage } from './completed-inquiry-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedInquiryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedInquiryDetailPageRoutingModule {}
