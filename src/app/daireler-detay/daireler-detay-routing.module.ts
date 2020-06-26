import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DairelerDetayPage } from './daireler-detay.page';

const routes: Routes = [
  {
    path: '',
    component: DairelerDetayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DairelerDetayPageRoutingModule {}
