import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarcamakayitlariPage } from './harcamakayitlari.page';

const routes: Routes = [
  {
    path: '',
    component: HarcamakayitlariPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarcamakayitlariPageRoutingModule {}
