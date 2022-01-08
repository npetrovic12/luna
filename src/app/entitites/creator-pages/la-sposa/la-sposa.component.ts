import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './la-sposa.component.html',
  styleUrls: ['./la-sposa.component.scss']
})
export class LaSposaComponent implements OnInit {
  readonly images = [
    // '/assets/images/la-sposa/ls2.jpg',
    '/assets/images/la-sposa/ls1.webp',
    '/assets/images/la-sposa/ls3.webp',
    '/assets/images/la-sposa/ls4.webp',
    '/assets/images/la-sposa/ls5.webp',
    '/assets/images/la-sposa/ls7.webp',
    '/assets/images/la-sposa/ls8.webp',
    '/assets/images/la-sposa/ls9.jpg',
    '/assets/images/la-sposa/ls6.webp',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
