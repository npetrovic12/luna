import { Component, Input } from '@angular/core';
import { CreatorCard } from '../../../model/creator-card.model';

@Component({
  selector: 'luna-creator-card',
  templateUrl: './creator-card.component.html',
  styleUrls: ['./creator-card.component.scss']
})
export class CreatorCardComponent {
  @Input() creatorCard!: CreatorCard;
}
