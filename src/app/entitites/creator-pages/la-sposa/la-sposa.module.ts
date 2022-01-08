import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaSposaRoutingModule } from './la-sposa-routing.module';
import { LaSposaComponent } from './la-sposa.component';
import { LaSposaTemplateComponent } from './la-sposa-template/la-sposa-template.component';
import { PageNavbarModule } from 'src/app/shared/components/page-navbar/page-navbar.module';
import { PhoneRibbonModule } from 'src/app/shared/components/phone-ribbon/phone-ribbon.module';
import { ParallaxGalleryModule } from 'src/app/shared/components/parallax-gallery/parallax-gallery.module';
import { HorizontalImageSliderModule } from 'src/app/shared/components/horizontal-image-slider/horizontal-image-slider.module';
import { PageFooterModule } from 'src/app/shared/components/page-footer/page-footer.module';


@NgModule({
  declarations: [
    LaSposaComponent,
    LaSposaTemplateComponent
  ],
  imports: [
    CommonModule,
    PageNavbarModule,
    LaSposaRoutingModule,
    PhoneRibbonModule,
    HorizontalImageSliderModule,
    PageFooterModule,
  ]
})
export class LaSposaModule { }
