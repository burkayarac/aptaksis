import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarcamakayitlariYenikayitPageRoutingModule } from './harcamakayitlari-yenikayit-routing.module';

import { HarcamakayitlariYenikayitPage } from './harcamakayitlari-yenikayit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HarcamakayitlariYenikayitPageRoutingModule
  ],
  declarations: [HarcamakayitlariYenikayitPage]
})
export class HarcamakayitlariYenikayitPageModule {}
