import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./entities/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'la-sposa', loadChildren: () => import('./entitites/creator-pages/la-sposa/la-sposa.module').then(m => m.LaSposaModule) },
  { path: 'nicole-couture', loadChildren: () => import('./entitites/creator-pages/nicole-couture/nicole-couture.module').then(m => m.NicoleCoutureModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
