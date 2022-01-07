import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactPageComponent } from './contact-page.component';
import { PageNavbarModule } from 'src/app/shared/components/page-navbar/page-navbar.module';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    PageNavbarModule,
    GoogleMapsModule,
  ]
})
export class ContactPageModule { }
