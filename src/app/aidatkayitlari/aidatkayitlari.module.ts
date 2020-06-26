import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AidatkayitlariPageRoutingModule } from './aidatkayitlari-routing.module';

import { AidatkayitlariPage } from './aidatkayitlari.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AidatkayitlariPageRoutingModule
  ],
  declarations: [AidatkayitlariPage]
})
export class AidatkayitlariPageModule {}
