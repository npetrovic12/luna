import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-navbar',
  templateUrl: './page-navbar.component.html',
  styleUrls: ['./page-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
