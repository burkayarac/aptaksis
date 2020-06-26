import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApartmanlarYenikayitPageRoutingModule } from './apartmanlar-yenikayit-routing.module';

import { ApartmanlarYenikayitPage } from './apartmanlar-yenikayit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ApartmanlarYenikayitPageRoutingModule
  ],
  declarations: [ApartmanlarYenikayitPage]
})
export class ApartmanlarYenikayitPageModule {}
