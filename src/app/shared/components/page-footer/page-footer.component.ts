import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'luna-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
