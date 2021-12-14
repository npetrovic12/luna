import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'la-sposa', loadChildren: () => import('./entitites/creator-pages/la-sposa/la-sposa.module').then(m => m.LaSposaModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
