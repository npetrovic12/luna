import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ContentCard } from 'src/app/entities/home-page/model/content-card.model';

@Component({
  selector: 'luna-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCardComponent {
  @Input() card!: ContentCard;
}
