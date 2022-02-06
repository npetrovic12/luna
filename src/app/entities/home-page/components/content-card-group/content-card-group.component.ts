import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ContentCard } from '../../model/content-card.model';

@Component({
  selector: 'luna-content-card-group',
  templateUrl: './content-card-group.component.html',
  styleUrls: ['./content-card-group.component.scss']
})
export class ContentCardGroupComponent {
  @Input() cards!: ContentCard[];

  activated: boolean[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(): void {
    this.activated = new Array(this.cards.length).fill(false);
  }

  activateCard(index: number) {
    setTimeout(() => {
      this.activated[index] = true;
      this.cdr.detectChanges();
    }, 300);
  }

}
