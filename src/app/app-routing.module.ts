import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./anasayfa/anasayfa.module').then( m => m.AnasayfaPageModule)},
  {
    path: 'kayitol',
    loadChildren: () => import('./kayitol/kayitol.module').then( m => m.KayitolPageModule)
  },
  {
    path: 'girisyap',
    loadChildren: () => import('./girisyap/girisyap.module').then( m => m.GirisyapPageModule)
  },
  {
    path: 'daireler-detay',
    loadChildren: () => import('./daireler-detay/daireler-detay.module').then( m => m.DairelerDetayPageModule)
  },
  {
    path: 'apartmanlar-yenikayit',
    loadChildren: () => import('./apartmanlar-yenikayit/apartmanlar-yenikayit.module').then( m => m.ApartmanlarYenikayitPageModule)
  },
  {
    path: 'aidatkayitlari-yenikayit',
    loadChildren: () => import('./aidatkayitlari-yenikayit/aidatkayitlari-yenikayit.module').then( m => m.AidatkayitlariYenikayitPageModule)
  },
  {
    path: 'aidatkayitlari-detay',
    loadChildren: () => import('./aidatkayitlari-detay/aidatkayitlari-detay.module').then( m => m.AidatkayitlariDetayPageModule)
  },
  {
    path: 'harcamakayitlari-detay',
    loadChildren: () => import('./harcamakayitlari-detay/harcamakayitlari-detay.module').then( m => m.HarcamakayitlariDetayPageModule)
  },
  {
    path: 'harcamakayitlari-yenikayit',
    loadChildren: () => import('./harcamakayitlari-yenikayit/harcamakayitlari-yenikayit.module').then( m => m.HarcamakayitlariYenikayitPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
