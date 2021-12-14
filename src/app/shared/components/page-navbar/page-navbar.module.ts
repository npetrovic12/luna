import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNavbarComponent } from './page-navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PageNavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    PageNavbarComponent,
  ]
})
export class PageNavbarModule { }
