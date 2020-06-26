import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaPage } from './anasayfa.page';

const routes: Routes = [
  {
    path: 'anasayfa',
    component: AnasayfaPage,
    children: [
        {
          path: 'rapor',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('../rapor/rapor.module').then(m => m.RaporPageModule)
            }
          ]
        },
      {
        path: 'apartmanlar',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../apartmanlar/apartmanlar.module').then(m => m.ApartmanlarPageModule)
          }
        ]
      },
      {
        path: 'aidatlar',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../aidatlar/aidatlar.module').then(m => m.AidatlarPageModule)
          }
        ]
      },
      {
        path: 'harcamalar',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../harcamalar/harcamalar.module').then(m => m.HarcamalarPageModule)
          }
        ]
      },
      {
        path: 'profil',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../profil/profil.module').then(m => m.ProfilPageModule)
          }
        ]
      },
      {
        path: 'apartmanlar/daireler',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../daireler/daireler.module').then(m => m.DairelerPageModule)
          }
        ]
      },
      {
        path: 'aidatlar/aidatkayitlari',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../aidatkayitlari/aidatkayitlari.module').then(m => m.AidatkayitlariPageModule)
          }
        ]
      },
      {
        path: 'harcamalar/harcamakayitlari',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../harcamakayitlari/harcamakayitlari.module').then(m => m.HarcamakayitlariPageModule)
          }
        ]
      },
      
      {
        path: '',
        redirectTo: '/anasayfa/rapor',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/girisyap',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class TabsPageRoutingModule {}
  