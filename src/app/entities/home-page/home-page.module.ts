import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { CardGroupComponent } from './components/card-group/card-group.component';
import { CreatorCardComponent } from './components/card-group/creator-card/creator-card.component';
import { ContentCardGroupComponent } from './components/content-card-group/content-card-group.component';
import { PageFooterModule } from 'src/app/shared/components/page-footer/page-footer.module';
import { DirectiveModule } from 'src/app/shared/directives/directive.module';
import { ContentCardModule } from 'src/app/shared/components/content-card/content-card.module';


@NgModule({
  declarations: [
    HomePageComponent,
    CardGroupComponent,
    CreatorCardComponent,
    ContentCardGroupComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    PageFooterModule,
    DirectiveModule,
    ContentCardModule,
  ]
})
export class HomePageModule { }
