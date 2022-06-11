import { AfterViewInit, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Directive({
    selector: '[delayedBackgroundImage]',
})
export class DelayedBackgroundImageDirective implements AfterViewInit, OnDestroy {
    @Input('delayedBackgroundImage') imageUrl!: string;

    @Input() backgroundImageDelay = 500;

    private imageLoadSubscription!: Subscription;

    constructor(private elemRef: ElementRef) { }

    ngAfterViewInit(): void {
        this.imageLoadSubscription = timer(this.backgroundImageDelay).subscribe(() => {
            this.elemRef.nativeElement.style.backgroundImage = 'url(' + this.imageUrl + ')';
        });
    }

    ngOnDestroy(): void {
        this.imageLoadSubscription?.unsubscribe();
    }

}