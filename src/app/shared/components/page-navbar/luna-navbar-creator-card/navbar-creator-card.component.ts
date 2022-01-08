import { Component, Input } from '@angular/core';
import { CreatorCard } from 'src/app/entities/home-page/model/creator-card.model';

@Component({
  selector: 'luna-navbar-creator-card',
  templateUrl: './navbar-creator-card.component.html',
  styleUrls: ['./navbar-creator-card.component.scss']
})
export class NavbarCreatorCardComponent {
  @Input() creatorCard!: CreatorCard;
}
