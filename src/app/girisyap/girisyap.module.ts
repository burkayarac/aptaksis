import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GirisyapPageRoutingModule } from './girisyap-routing.module';

import { GirisyapPage } from './girisyap.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    GirisyapPageRoutingModule
  ],
  declarations: [GirisyapPage]
})
export class GirisyapPageModule {}
