import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ContentCard } from '../home-page/model/content-card.model';

@Component({
  selector: 'luna-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  active: boolean[] = [false, false];
  cards: ContentCard[] = [
    {
      title: '',
      text: 'U srcu Beograda, na Vračaru nalazi se naš salon sa širokom ponudom različitih modela renomiranih dizajnera.Od 2018. godine se trudimo da ispratimo trendove i prilagodimo se svačijem ukusu.',
      imgPath: 'assets/images/nicole-couture/nc4.webp'
    },
    {
      title: '',
      text: 'Svake godine naše kolekcije upotpunjujemo novom kolekcijom najpažljiviji odabranim modelima.',
      imgPath: 'assets/images/nicole-couture/nc11.webp'
    }
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  activateCard(index: number): void {
    this.active[index] = true;
    this.cdr.detectChanges();
  }
}
