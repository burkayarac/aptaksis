import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AidatkayitlariDetayPageRoutingModule } from './aidatkayitlari-detay-routing.module';

import { AidatkayitlariDetayPage } from './aidatkayitlari-detay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AidatkayitlariDetayPageRoutingModule
  ],
  declarations: [AidatkayitlariDetayPage]
})
export class AidatkayitlariDetayPageModule {}
