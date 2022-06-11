import { Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { CreatorCard } from '../../model/creator-card.model';

@Component({
  selector: 'luna-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent implements OnInit, OnDestroy {
  @Input() creatorCards!: CreatorCard[];

  private counter = 1;
  private touching = false;
  private scrollTimer!: Subscription;

  constructor(private elemRef: ElementRef) {
  }

  ngOnInit(): void {
    this.scrollTimer = timer(4000, 4000).subscribe(() => {
      if (this.touching || window.innerWidth >= 600) return;
      this.elemRef.nativeElement.scrollLeft = (this.counter++) * (window.outerWidth + 16);
      this.counter %= this.creatorCards?.length ?? 1;
    });
  }

  ngOnDestroy(): void {
    this.scrollTimer?.unsubscribe();
  }

  trackByFn(index: number) {
    return index;
  }

  // @HostListener('touchstart', ['$event'])
  // private onTouchMove(ev: TouchEvent) {
  //   this.touching = true;
  // }

  // @HostListener('touchend')
  // private onTouchEnd() {
  //   this.touching = false;
  // }

}
