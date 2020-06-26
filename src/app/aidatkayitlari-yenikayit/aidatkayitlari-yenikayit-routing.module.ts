import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AidatkayitlariYenikayitPage } from './aidatkayitlari-yenikayit.page';

const routes: Routes = [
  {
    path: '',
    component: AidatkayitlariYenikayitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AidatkayitlariYenikayitPageRoutingModule {}
