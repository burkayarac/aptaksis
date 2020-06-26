import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Routes } from '@angular/router';
import { TabsPageRoutingModule } from './anasayfa.router.module';

import { AnasayfaPage } from './anasayfa.page';

const routes: Routes = [
  {
    path: '',
    component: AnasayfaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [AnasayfaPage]
})
export class AnasayfaPageModule {}
