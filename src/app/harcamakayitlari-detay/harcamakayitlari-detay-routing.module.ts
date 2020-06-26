import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarcamakayitlariDetayPage } from './harcamakayitlari-detay.page';

const routes: Routes = [
  {
    path: '',
    component: HarcamakayitlariDetayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarcamakayitlariDetayPageRoutingModule {}
