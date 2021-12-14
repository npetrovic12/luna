import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NicoleCoutureRoutingModule } from './nicole-couture-routing.module';
import { NicoleCoutureComponent } from './nicole-couture.component';


@NgModule({
  declarations: [
    NicoleCoutureComponent,
  ],
  imports: [
    CommonModule,
    NicoleCoutureRoutingModule
  ]
})
export class NicoleCoutureModule { }
