import { Component, OnInit, ChangeDetectionStrategy, ViewChildren, ContentChildren, QueryList, Input, ElementRef, HostListener, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'luna-parallax-gallery',
  templateUrl: './parallax-gallery.component.html',
  styleUrls: ['./parallax-gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParallaxGalleryComponent implements OnInit {

  @Input() imageSources: string[] = [];

  @Input() autoScroll = true;


  thumbPosition = 0;

  scrollPosition = 0;

  private mouseOver = false;
  private _parallaxImages!: QueryList<ElementRef<HTMLImageElement>>;

  constructor(private cdr: ChangeDetectorRef) { }

  @ViewChildren('parallaxImage') set parallaxImages(images: QueryList<ElementRef<HTMLImageElement>>) {
    this._parallaxImages = images;
    this.scrollToImage(0);
  }

  get parallaxImages() {
    return this._parallaxImages;
  }

  ngOnInit(): void {

    setInterval(() => {
      if (!this.autoScroll || this.mouseOver) return;
      this.scrollToImage(this.scrollPosition + 1);

      this.cdr.markForCheck();
    }, 5000);

  }

  onContainerScroll(ev: WheelEvent) {
    if (this.scrollPosition + Math.sign(ev.deltaY) >= 0) {
      this.scrollPosition += Math.sign(ev.deltaY);
      this.updateScrollPosition();
    }
  }

  scrollToImage(index: number) {
    this.scrollPosition = index;
    this.updateScrollPosition();
  }

  @HostListener('mouseover')
  private onMouseOver() {
    this.mouseOver = true;
  }

  @HostListener('mouseout')
  private onMouseOut() {
    this.mouseOver = false;
  }

  @HostListener('window:resize')
  private updateScrollPosition() {
    let heightSum = 0;
    let maxScrolled = 0;
    if (this.scrollPosition >= this.parallaxImages?.length) this.scrollPosition = 0;

    this.parallaxImages?.forEach((image, i) => {
      if (this.scrollPosition >= i) {
        image.nativeElement.style.transform = 'translateY(' + -heightSum + 'px)';
      } else if (this.scrollPosition + 1 === i) {
        image.nativeElement.style.transform = 'translateY(' + (-heightSum + (this.parallaxImages?.get(i - 1)?.nativeElement.height || 0)) + 'px)';
      } else {
        image.nativeElement.style.transform = 'initial';
      }

      if (this.scrollPosition - 1 >= i && i < this.parallaxImages.length - 1) maxScrolled += image.nativeElement.height + 5;

      heightSum += image.nativeElement.height + 5;
    });

    if (this.scrollPosition + 1 >= this.parallaxImages?.length) {
      let firstImage = this.parallaxImages.get(0);
      if (firstImage != null) {
        firstImage.nativeElement.style.transform = 'translateY(' + ((this.parallaxImages?.get(this.parallaxImages?.length - 1)?.nativeElement.height || 0) - 5) + 'px)';
      }
    }

    this.thumbPosition = maxScrolled / heightSum * window.innerHeight;

  }

  // Scroll strategy
  // onContainerScroll(ev: WheelEvent) {
  //   const downScroll = ev.deltaY > 0;
  //   if (this.scrollPosition + ev.deltaY > 0) this.scrollPosition += Math.sign(ev.deltaY) * 200;

  //   let heightSum = 0;

  //   this.parallaxImages?.forEach(image => {
  //     // ev.target.pare
  //     if (this.scrollPosition <= heightSum) {
  //       image.nativeElement.style.transform = 'translateY(' + -this.scrollPosition + 'px)';
  //     } else {
  //       image.nativeElement.style.transform = 'translateY(' + -heightSum + 'px)';
  //     }

  //     heightSum += image.nativeElement.height + 5;
  //   });

  //   if (this.scrollPosition > heightSum - this.parallaxImages?.last.nativeElement.height) {
  //     this.scrollPosition = heightSum - this.parallaxImages?.last.nativeElement.height;
  //   }

  // }

  trackByFn(index: number, source: string) {
    return source;
  }

}
