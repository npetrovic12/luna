import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneRibbonComponent } from './phone-ribbon.component';

@NgModule({
  declarations: [
    PhoneRibbonComponent,
  ],
  exports: [
    PhoneRibbonComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PhoneRibbonModule { }
