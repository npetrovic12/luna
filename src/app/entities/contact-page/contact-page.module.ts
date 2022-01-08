import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactPageComponent } from './contact-page.component';
import { PageNavbarModule } from 'src/app/shared/components/page-navbar/page-navbar.module';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';

@NgModule({
  declarations: [
    ContactPageComponent,
    ContactInfoComponent
  ],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    PageNavbarModule,
  ]
})
export class ContactPageModule {}
