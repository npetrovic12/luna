import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { CreatorCard } from '../../model/creator-card.model';

@Component({
  selector: 'luna-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent implements OnInit {
  @Input() creatorCards!: CreatorCard[];

  constructor(private elemRef: ElementRef) {
  }

  ngOnInit(): void {
    if (window.innerWidth >= 600) return;
    setInterval(() => {
      const scrollPos = Math.ceil(((this.elemRef.nativeElement.scrollLeft / (this.creatorCards?.length ?? 1)) % window.outerWidth + 1) % this.creatorCards?.length);
      this.elemRef.nativeElement.scrollLeft = scrollPos * window.outerWidth + 16;
    }, 5000);
  }
}
