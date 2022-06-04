import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { CreatorCard } from '../../model/creator-card.model';

@Component({
  selector: 'luna-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent implements OnInit {
  @Input() creatorCards!: CreatorCard[];

  private counter = 1;

  constructor(private elemRef: ElementRef) {
  }

  ngOnInit(): void {
    if (window.innerWidth >= 600) return;
    setInterval(() => {
      this.elemRef.nativeElement.scrollLeft = (this.counter++) * (window.outerWidth + 16);
      this.counter %= this.creatorCards?.length ?? 1;
    }, 4000);
  }
}
