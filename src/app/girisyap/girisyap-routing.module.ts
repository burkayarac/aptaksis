import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GirisyapPage } from './girisyap.page';

const routes: Routes = [
  {
    path: '',
    component: GirisyapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GirisyapPageRoutingModule {}
