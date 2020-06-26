import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AidatkayitlariPage } from './aidatkayitlari.page';

const routes: Routes = [
  {
    path: '',
    component: AidatkayitlariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AidatkayitlariPageRoutingModule {}
