import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { PageNavbarModule } from 'src/app/shared/components/page-navbar/page-navbar.module';
import { PageFooterModule } from 'src/app/shared/components/page-footer/page-footer.module';
import { ContentCardModule } from 'src/app/shared/components/content-card/content-card.module';
import { DirectiveModule } from 'src/app/shared/directives/directive.module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    PageNavbarModule,
    PageFooterModule,
    ContentCardModule,
    DirectiveModule
  ]
})
export class AboutModule { }
