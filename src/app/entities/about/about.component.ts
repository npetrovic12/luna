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
      text: 'In vel metus quis purus molestie pretium ac vitae nisi. Sed auctor viverra ante, eu ullamcorper magna semper eu. Nullam ac lorem nec felis fringilla ultricies eu et erat. Vestibulum non mauris nec tortor congue facilisis.' +
      ' In vel metus quis purus molestie pretium ac vitae nisi. Sed auctor viverra ante, eu ullamcorper magna semper eu. Nullam ac lorem nec felis fringilla ultricies eu et erat. Vestibulum non mauris nec tortor congue facilisis.',
      imgPath: 'assets/images/nicole-couture/nc4.webp'
    },
    {
      title: '',
      text: 'Nulla finibus ullamcorper dolor volutpat molestie. ' +
      'Cras in ante arcu. In hac habitasse platea dictumst. Nullam sagittis iaculis venenatis. Pellentesque malesuada, dui et laoreet luctus, quam lacus euismod justo, vitae aliquet elit elit ac risus. Nulla finibus ullamcorper dolor volutpat molestie. Cras in ante arcu. In hac habitasse platea dictumst. Nullam sagittis iaculis venenatis. Pellentesque malesuada, dui et laoreet luctus, quam lacus euismod justo, vitae aliquet elit elit ac risus.',
      imgPath: 'assets/images/nicole-couture/nc11.webp'
    }
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  activateCard(index: number): void {
    this.active[index] = true;
    this.cdr.detectChanges();
  }
}
