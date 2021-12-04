import { Component, Input } from '@angular/core';
import { BrandCard } from '../../model/brand-card.model';

@Component({
  selector: 'luna-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent {
  @Input() brandCards!: BrandCard[];
}
