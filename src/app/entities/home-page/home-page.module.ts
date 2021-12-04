import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { CardGroupComponent } from './components/card-group/card-group.component';
import { BrandCardComponent } from './components/card-group/brand-card/brand-card.component';


@NgModule({
  declarations: [
    HomePageComponent,
    CardGroupComponent,
    BrandCardComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
