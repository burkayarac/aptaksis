import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaporPage } from './rapor.page';

const routes: Routes = [
  {
    path: '',
    component: RaporPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaporPageRoutingModule {}
