import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { CardGroupComponent } from './components/card-group/card-group.component';
import { CreatorCardComponent } from './components/card-group/creator-card/creator-card.component';


@NgModule({
  declarations: [
    HomePageComponent,
    CardGroupComponent,
    CreatorCardComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
