import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AidatlarPageRoutingModule } from './aidatlar-routing.module';

import { AidatlarPage } from './aidatlar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AidatlarPageRoutingModule
  ],
  declarations: [AidatlarPage]
})
export class AidatlarPageModule {}
