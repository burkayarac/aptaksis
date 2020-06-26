import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarcamakayitlariPageRoutingModule } from './harcamakayitlari-routing.module';

import { HarcamakayitlariPage } from './harcamakayitlari.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarcamakayitlariPageRoutingModule
  ],
  declarations: [HarcamakayitlariPage]
})
export class HarcamakayitlariPageModule {}
