import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { CardGroupComponent } from './components/card-group/card-group.component';
import { CreatorCardComponent } from './components/card-group/creator-card/creator-card.component';
import { ContentCardComponent } from './components/content-card-group/content-card/content-card.component';
import { ContentCardGroupComponent } from './components/content-card-group/content-card-group.component';


@NgModule({
  declarations: [
    HomePageComponent,
    CardGroupComponent,
    CreatorCardComponent,
    ContentCardComponent,
    ContentCardGroupComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
