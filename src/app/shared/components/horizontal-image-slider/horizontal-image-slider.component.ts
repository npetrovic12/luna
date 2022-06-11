import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'luna-horizontal-image-slider',
  templateUrl: './horizontal-image-slider.component.html',
  styleUrls: ['./horizontal-image-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HorizontalImageSliderComponent implements OnInit {

  @Input() galleryImages: string[] = [];
  transformPositionX = 0;

  private _innerWrapper!: ElementRef<HTMLDivElement>;
  private oldMouseX!: number | null;

  constructor(
    private elemRef: ElementRef,
    private cdr: ChangeDetectorRef,
  ) { }

  @ViewChild('innerWrapper') set innerWrapper(wrapper: ElementRef<HTMLDivElement>) {
    this._innerWrapper = wrapper;
    this.innerWrapper.nativeElement.append(...this.generateImages());
    this.innerWrapper.nativeElement.append(...this.generateImages());
    this.innerWrapper.nativeElement.append(...this.generateImages());
    setTimeout(() => {
      this.transformPositionX = -this._innerWrapper.nativeElement.scrollWidth / 3;
      this.cdr.detectChanges();
    }, 100);
  }

  get innerWrapper() {
    return this._innerWrapper;
  }

  @HostListener('mousedown')
  private onMouseDown() {
    this.elemRef.nativeElement.onmousemove = (ev: MouseEvent) => {
      this.transformPositionX -= 2 * ((this.oldMouseX || ev.screenX) - ev.screenX);
      this.oldMouseX = ev.screenX;
      console.log(this.transformPositionX, this.oldMouseX);

      if (this.transformPositionX < -this._innerWrapper.nativeElement.scrollWidth * 3 / 5) {
        this.transformPositionX = -this._innerWrapper.nativeElement.scrollWidth * 0.4;
      }

      if (this.transformPositionX > -this._innerWrapper.nativeElement.scrollWidth * 1 / 3) {
        this.transformPositionX = -this._innerWrapper.nativeElement.scrollWidth * 0.6;
      }

      this.cdr.detectChanges();
    };
  }

  @HostListener('touchmove', ['$event'])
  private onTouchMove(ev: TouchEvent) {
    this.transformPositionX -= ((this.oldMouseX || ev.changedTouches?.[0]?.screenX) - ev.changedTouches?.[0]?.screenX);
    this.oldMouseX = ev.changedTouches?.[0]?.screenX;

    if (this.transformPositionX < -this._innerWrapper.nativeElement.scrollWidth * 2 / 3) {
      this.transformPositionX = -this._innerWrapper.nativeElement.scrollWidth * 0.4;
    }

    if (this.transformPositionX > -this._innerWrapper.nativeElement.scrollWidth * 1 / 3) {
      this.transformPositionX = -this._innerWrapper.nativeElement.scrollWidth * 0.6;
    }

    this.cdr.detectChanges();
  }

  @HostListener('touchend')
  private onTouchEnd() {
    this.oldMouseX = null;
  }

  @HostListener('window:mouseup')
  private onMouseUp() {
    this.elemRef.nativeElement.onmousemove = null;
    this.oldMouseX = null;
  }

  ngOnInit(): void {
    setInterval(() => {
      this.transformPositionX += 0.3;

      if (this.transformPositionX < -this._innerWrapper.nativeElement.scrollWidth * 2 / 3) {
        this.transformPositionX = -this._innerWrapper.nativeElement.scrollWidth / 3;
      }

      if (this.transformPositionX > -this._innerWrapper.nativeElement.scrollWidth * 1 / 3) {
        this.transformPositionX = -this._innerWrapper.nativeElement.scrollWidth * 2 / 3;
      }
      this.cdr.detectChanges();
    }, 1000 / 60);

  }

  private generateImages() {
    return this.galleryImages.map(source => {
      const img = document.createElement('img');
      img.src = source;
      img.draggable = false;

      return img;
    });
  }

}
