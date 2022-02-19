import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StPatrickComponent } from './st-patrick.component';

const routes: Routes = [{ path: '', component: StPatrickComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StPatrickRoutingModule { }
