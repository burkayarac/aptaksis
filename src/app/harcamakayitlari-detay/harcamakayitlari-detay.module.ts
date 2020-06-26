import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarcamakayitlariDetayPageRoutingModule } from './harcamakayitlari-detay-routing.module';

import { HarcamakayitlariDetayPage } from './harcamakayitlari-detay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HarcamakayitlariDetayPageRoutingModule
  ],
  declarations: [HarcamakayitlariDetayPage]
})
export class HarcamakayitlariDetayPageModule {}
