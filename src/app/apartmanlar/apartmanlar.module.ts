import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApartmanlarPageRoutingModule } from './apartmanlar-routing.module';

import { ApartmanlarPage } from './apartmanlar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApartmanlarPageRoutingModule
  ],
  declarations: [ApartmanlarPage]
})
export class ApartmanlarPageModule {}
