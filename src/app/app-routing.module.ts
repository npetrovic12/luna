import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () => import('./entities/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'la-sposa',
    loadChildren: () => import('./entities/la-sposa/la-sposa.module').then(m => m.LaSposaModule),
    data: {
      menuItem: 'dress',
    },
  },
  {
    path: 'nicole-couture',
    loadChildren: () => import('./entities/nicole-couture/nicole-couture.module').then(m => m.NicoleCoutureModule),
    data: {
      menuItem: 'dress',
    },
  },
  {
    path: 'st-patrick',
    loadChildren: () => import('./entities/st-patrick/st-patrick.module').then(m => m.StPatrickModule),
    data: {
      menuItem: 'dress',
    },
  },
  {
    path: 'contact',
    loadChildren: () => import('./entities/contact-page/contact-page.module').then(m => m.ContactPageModule),
    data: {
      menuItem: 'contact',
    },
  },
  {
    path: 'about',
    loadChildren: () => import('./entities/about/about.module').then(m => m.AboutModule),
    data: {
      menuItem: 'about',
    },
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
