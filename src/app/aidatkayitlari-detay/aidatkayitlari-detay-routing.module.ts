import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AidatkayitlariDetayPage } from './aidatkayitlari-detay.page';

const routes: Routes = [
  {
    path: '',
    component: AidatkayitlariDetayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AidatkayitlariDetayPageRoutingModule {}
