import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNavbarModule } from 'src/app/shared/components/page-navbar/page-navbar.module';
import { NicoleCoutureTemplateComponent } from './nicole-couture-template/nicole-couture-template.component';
import { NicoleCoutureComponent } from './nicole-couture.component';
import { ContentCardModule } from 'src/app/shared/components/content-card/content-card.module';
import { HorizontalImageSliderModule } from 'src/app/shared/components/horizontal-image-slider/horizontal-image-slider.module';
import { PageFooterModule } from 'src/app/shared/components/page-footer/page-footer.module';
import { PhoneRibbonModule } from 'src/app/shared/components/phone-ribbon/phone-ribbon.module';
import { DirectiveModule } from 'src/app/shared/directives/directive.module';
import { NicoleCoutureRoutingModule } from './nicole-couture-routing.module';


@NgModule({
  declarations: [
    NicoleCoutureTemplateComponent,
    NicoleCoutureComponent
  ],
  imports: [
    CommonModule,
    PageNavbarModule,
    NicoleCoutureRoutingModule,
    PhoneRibbonModule,
    HorizontalImageSliderModule,
    PageFooterModule,
    ContentCardModule,
    DirectiveModule,
  ]
})
export class NicoleCoutureModule { }
