import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarcamalarPage } from './harcamalar.page';

const routes: Routes = [
  {
    path: '',
    component: HarcamalarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarcamalarPageRoutingModule {}
