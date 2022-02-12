import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNavbarModule } from 'src/app/shared/components/page-navbar/page-navbar.module';
import { PhoneRibbonModule } from 'src/app/shared/components/phone-ribbon/phone-ribbon.module';
import { HorizontalImageSliderModule } from 'src/app/shared/components/horizontal-image-slider/horizontal-image-slider.module';
import { PageFooterModule } from 'src/app/shared/components/page-footer/page-footer.module';
import { ContentCardModule } from 'src/app/shared/components/content-card/content-card.module';
import { DirectiveModule } from 'src/app/shared/directives/directive.module';
import { StPatrickComponent } from './st-patrick.component';
import { StPatrickTemplateComponent } from './st-patrick-template/st-patrick-template/st-patrick-template.component';
import { StPatrickRoutingModule } from './st-patrick-routing.module';


@NgModule({
  declarations: [
    StPatrickComponent,
    StPatrickTemplateComponent
  ],
  imports: [
    CommonModule,
    PageNavbarModule,
    StPatrickRoutingModule,
    PhoneRibbonModule,
    HorizontalImageSliderModule,
    PageFooterModule,
    ContentCardModule,
    DirectiveModule,
  ]
})
export class StPatrickModule { }
