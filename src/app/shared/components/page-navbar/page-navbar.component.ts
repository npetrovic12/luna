import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { creatorCards } from 'src/app/entities/home-page/model/creator-cards';

@Component({
  selector: 'app-page-navbar',
  templateUrl: './page-navbar.component.html',
  styleUrls: ['./page-navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNavbarComponent implements OnInit {

  creatorCards = creatorCards;
  selectedModule: string;

  constructor(private route: ActivatedRoute) {
    this.selectedModule = this.route.snapshot.data['menuItem'];
  }

  ngOnInit(): void {
  }

}
