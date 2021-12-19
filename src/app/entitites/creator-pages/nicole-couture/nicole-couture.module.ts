import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNavbarModule } from 'src/app/shared/components/page-navbar/page-navbar.module';
import { NicoleCoutureTemplateComponent } from './nicole-couture-template/nicole-couture-template.component';
import { NicoleCoutureRoutingModule } from './nicole-couture-routing.module';
import { NicoleCoutureComponent } from './nicole-couture.component';


@NgModule({
  declarations: [
    NicoleCoutureTemplateComponent,
    NicoleCoutureComponent
  ],
  imports: [
    CommonModule,
    PageNavbarModule,
    NicoleCoutureRoutingModule
  ]
})
export class NicoleCoutureModule { }
