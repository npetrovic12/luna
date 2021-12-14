import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NicoleCoutureRoutingModule } from './nicole-couture-routing.module';
import { NicoleCoutureComponent } from './nicole-couture.component';
import { NicoleCoutureTemplateComponent } from './nicole-couture-template/nicole-couture-template.component';


@NgModule({
  declarations: [
    NicoleCoutureComponent,
    NicoleCoutureTemplateComponent,
  ],
  imports: [
    CommonModule,
    NicoleCoutureRoutingModule
  ]
})
export class NicoleCoutureModule { }
