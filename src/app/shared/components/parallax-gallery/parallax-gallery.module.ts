import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxGalleryComponent } from './parallax-gallery.component';



@NgModule({
  declarations: [
    ParallaxGalleryComponent,
  ],
  exports: [
    ParallaxGalleryComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ParallaxGalleryModule { }
