import { Component, OnInit } from '@angular/core';
import { contentCards } from './content-cards/nicole-couture-content-cards';

@Component({
  templateUrl: './nicole-couture.component.html',
  styleUrls: ['./nicole-couture.component.scss'],
})
export class NicoleCoutureComponent implements OnInit {
  readonly images = [
    '/assets/images/nicole-couture/nc2.webp',
    '/assets/images/nicole-couture/nc3.webp',
    '/assets/images/nicole-couture/nc4.webp',
    '/assets/images/nicole-couture/nc5.webp',
    '/assets/images/nicole-couture/nc6.webp',
    '/assets/images/nicole-couture/nc7.webp',
    '/assets/images/nicole-couture/nc8.webp',
    '/assets/images/nicole-couture/nc9.webp',
    '/assets/images/nicole-couture/nc10.webp',
    '/assets/images/nicole-couture/nc11.webp',
    '/assets/images/nicole-couture/nc12.webp',
  ];

  readonly cards = contentCards;

  constructor() {}

  ngOnInit(): void {}
}
