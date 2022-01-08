import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalImageSliderComponent } from './horizontal-image-slider.component';

@NgModule({
  declarations: [
    HorizontalImageSliderComponent,
  ],
  exports: [
    HorizontalImageSliderComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class HorizontalImageSliderModule { }
