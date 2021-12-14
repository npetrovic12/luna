import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaSposaRoutingModule } from './la-sposa-routing.module';
import { LaSposaComponent } from './la-sposa.component';
import { LaSposaTemplateComponent } from './la-sposa-template/la-sposa-template.component';
import { PageNavbarModule } from 'src/app/shared/components/page-navbar/page-navbar.module';


@NgModule({
  declarations: [
    LaSposaComponent,
    LaSposaTemplateComponent
  ],
  imports: [
    CommonModule,
    PageNavbarModule,
    LaSposaRoutingModule
  ]
})
export class LaSposaModule { }
