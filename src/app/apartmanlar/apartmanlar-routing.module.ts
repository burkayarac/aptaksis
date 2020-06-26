import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApartmanlarPage } from './apartmanlar.page';

const routes: Routes = [
  {
    path: '',
    component: ApartmanlarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApartmanlarPageRoutingModule {}
