import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarcamakayitlariYenikayitPage } from './harcamakayitlari-yenikayit.page';

const routes: Routes = [
  {
    path: '',
    component: HarcamakayitlariYenikayitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarcamakayitlariYenikayitPageRoutingModule {}
