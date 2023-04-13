import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompletedInquiryPage } from './completed-inquiry.page';

const routes: Routes = [
  {
    path: '',
    component: CompletedInquiryPage
  },
  {
    path: 'completed-inquiry-detail',
    loadChildren: () => import('./completed-inquiry-detail/completed-inquiry-detail.module').then( m => m.CompletedInquiryDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompletedInquiryPageRoutingModule {}
