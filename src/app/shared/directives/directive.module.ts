import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnScrollActivateDirective } from './on-scroll-activate.directive';
import { DelayedBackgroundImageDirective } from './delayed-background-image.directive';

@NgModule({
    declarations: [
        OnScrollActivateDirective,
        DelayedBackgroundImageDirective,
    ],
    imports: [ CommonModule ],
    exports: [
        OnScrollActivateDirective,
        DelayedBackgroundImageDirective,
    ],
    providers: [],
})
export class DirectiveModule {}