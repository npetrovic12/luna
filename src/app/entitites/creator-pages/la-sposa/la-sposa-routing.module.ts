import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaSposaComponent } from './la-sposa.component';

const routes: Routes = [{ path: '', component: LaSposaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaSposaRoutingModule { }
