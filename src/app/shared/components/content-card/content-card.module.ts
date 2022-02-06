import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from './content-card.component';



@NgModule({
  declarations: [
    ContentCardComponent,
  ],
  exports: [
    ContentCardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ContentCardModule { }
