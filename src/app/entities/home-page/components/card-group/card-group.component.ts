import { Component, Input } from '@angular/core';
import { CreatorCard } from '../../model/creator-card.model';

@Component({
  selector: 'luna-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent {
  @Input() creatorCards!: CreatorCard[];
}
