import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DairelerDetayPageRoutingModule } from './daireler-detay-routing.module';

import { DairelerDetayPage } from './daireler-detay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DairelerDetayPageRoutingModule
  ],
  declarations: [DairelerDetayPage]
})
export class DairelerDetayPageModule {}
