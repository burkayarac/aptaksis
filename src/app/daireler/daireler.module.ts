import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DairelerPageRoutingModule } from './daireler-routing.module';

import { DairelerPage } from './daireler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DairelerPageRoutingModule
  ],
  declarations: [DairelerPage]
})
export class DairelerPageModule {}
