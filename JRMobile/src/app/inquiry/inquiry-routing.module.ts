import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InquiryPage } from './inquiry.page';

const routes: Routes = [
  {
    path: '',
    component: InquiryPage
  },
  {
    path: 'new-inquiry',
    loadChildren: () => import('./new-inquiry/new-inquiry.module').then( m => m.NewInquiryPageModule)
  },
  {
    path: 'current-inquiry',
    loadChildren: () => import('./current-inquiry/current-inquiry.module').then( m => m.CurrentInquiryPageModule)
  },
  {
    path: 'completed-inquiry',
    loadChildren: () => import('./completed-inquiry/completed-inquiry.module').then( m => m.CompletedInquiryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InquiryPageRoutingModule {}
