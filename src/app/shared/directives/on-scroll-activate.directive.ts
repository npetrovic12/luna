import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
    selector: '[onScrollActivate]',
})
export class OnScrollActivateDirective {

    @Output('onScrollActivate') elementScrolled = new EventEmitter<void>();

    private scrollWatcher!: IntersectionObserver | null;

    constructor(private elemRef: ElementRef) { }

    ngAfterViewInit(): void {
        this.scrollWatcher = new IntersectionObserver(entries => {
            if (!this.checkIfIntersecting(entries?.[0])) return;
            this.elementScrolled.emit();
            this.scrollWatcher?.unobserve(this.elemRef.nativeElement);
            this.scrollWatcher = null;
        });

        this.scrollWatcher?.observe(this.elemRef.nativeElement);
    }

    ngOnDestroy(): void {
        this.scrollWatcher?.unobserve(this.elemRef.nativeElement);
    }

    private checkIfIntersecting(entry: IntersectionObserverEntry) {
        console.log(window.scrollY + window.innerHeight, entry);
        return (entry as any).isIntersecting;
    }
}