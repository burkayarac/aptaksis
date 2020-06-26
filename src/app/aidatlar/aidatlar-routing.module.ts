import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AidatlarPage } from './aidatlar.page';

const routes: Routes = [
  {
    path: '',
    component: AidatlarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AidatlarPageRoutingModule {}
