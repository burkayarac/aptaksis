import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AidatkayitlariYenikayitPageRoutingModule } from './aidatkayitlari-yenikayit-routing.module';

import { AidatkayitlariYenikayitPage } from './aidatkayitlari-yenikayit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AidatkayitlariYenikayitPageRoutingModule
  ],
  declarations: [AidatkayitlariYenikayitPage]
})
export class AidatkayitlariYenikayitPageModule {}
