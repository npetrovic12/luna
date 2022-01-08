import { Component, Input, OnInit } from '@angular/core';
import { ContentCard } from '../../model/content-card.model';

@Component({
  selector: 'luna-content-card-group',
  templateUrl: './content-card-group.component.html',
  styleUrls: ['./content-card-group.component.scss']
})
export class ContentCardGroupComponent {
  @Input() cards!: ContentCard[];
}
