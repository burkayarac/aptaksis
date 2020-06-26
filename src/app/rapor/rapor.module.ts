import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaporPageRoutingModule } from './rapor-routing.module';

import { RaporPage } from './rapor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaporPageRoutingModule
  ],
  declarations: [RaporPage]
})
export class RaporPageModule {}
