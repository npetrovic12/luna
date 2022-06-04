import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNavbarComponent } from './page-navbar.component';
import { RouterModule } from '@angular/router';
import { NavbarCreatorCardComponent } from './luna-navbar-creator-card/navbar-creator-card.component';

@NgModule({
  declarations: [
    PageNavbarComponent,
    NavbarCreatorCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    PageNavbarComponent,
    NavbarCreatorCardComponent,
  ]
})
export class PageNavbarModule { }
