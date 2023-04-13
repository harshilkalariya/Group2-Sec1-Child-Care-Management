import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentInquiryPage } from './current-inquiry.page';

const routes: Routes = [
  {
    path: '',
    component: CurrentInquiryPage
  },
  {
    path: 'inquiry-detail',
    loadChildren: () => import('./inquiry-detail/inquiry-detail.module').then( m => m.InquiryDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentInquiryPageRoutingModule {}
