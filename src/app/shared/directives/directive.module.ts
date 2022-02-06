import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnScrollActivateDirective } from './on-scroll-activate.directive';

@NgModule({
    declarations: [
        OnScrollActivateDirective,
    ],
    imports: [ CommonModule ],
    exports: [
        OnScrollActivateDirective,
    ],
    providers: [],
})
export class DirectiveModule {}