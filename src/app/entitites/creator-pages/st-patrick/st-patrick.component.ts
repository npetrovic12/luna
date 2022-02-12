import { Component, OnInit } from '@angular/core';
import { contentCards } from './content-cards/st-patrick-content-cards.model';

@Component({
  templateUrl: './st-patrick.component.html',
  styleUrls: ['./st-patrick.component.scss']
})
export class StPatrickComponent implements OnInit {
  readonly images = [
    '/assets/images/st-patrick/sp1.webp',
    '/assets/images/st-patrick/sp2.webp',
    '/assets/images/st-patrick/sp3.webp',
    '/assets/images/st-patrick/sp4.webp',
    '/assets/images/st-patrick/sp5.webp',
    '/assets/images/st-patrick/sp6.webp',
    '/assets/images/st-patrick/sp7.jpg',
    '/assets/images/st-patrick/sp8.webp',
    '/assets/images/st-patrick/sp9.webp',
    '/assets/images/st-patrick/sp10.webp',
  ];

  readonly cards = contentCards;

  constructor() { }

  ngOnInit(): void {
  }

}
