import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarcamalarPageRoutingModule } from './harcamalar-routing.module';

import { HarcamalarPage } from './harcamalar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarcamalarPageRoutingModule
  ],
  declarations: [HarcamalarPage]
})
export class HarcamalarPageModule {}
