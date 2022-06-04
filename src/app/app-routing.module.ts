import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./entities/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'la-sposa', loadChildren: () => import('./entities/la-sposa/la-sposa.module').then(m => m.LaSposaModule) },
  { path: 'nicole-couture', loadChildren: () => import('./entities/nicole-couture/nicole-couture.module').then(m => m.NicoleCoutureModule) },
  { path: 'st-patrick', loadChildren: () => import('./entities/st-patrick/st-patrick.module').then(m => m.StPatrickModule) },
  { path: 'contact', loadChildren: () => import('./entities/contact-page/contact-page.module').then(m => m.ContactPageModule) },
  { path: 'about', loadChildren: () => import('./entities/about/about.module').then(m => m.AboutModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
