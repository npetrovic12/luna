import { Component, Input } from '@angular/core';
import { BrandCard } from '../../../model/brand-card.model';

@Component({
  selector: 'luna-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss']
})
export class BrandCardComponent {
  @Input() brandCard!: BrandCard;
}
