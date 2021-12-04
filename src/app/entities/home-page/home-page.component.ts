import { Component, OnInit } from '@angular/core';
import { brandCardsMock } from './model/brand-cards.mock';

@Component({
  selector: 'luna-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  brandCardsMock = brandCardsMock;

  constructor() { }

  ngOnInit(): void {
  }

}
