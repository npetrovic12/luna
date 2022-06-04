import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NicoleCoutureComponent } from './nicole-couture.component';

const routes: Routes = [{ path: '', component: NicoleCoutureComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NicoleCoutureRoutingModule { }
