import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'luna-phone-ribbon',
  templateUrl: './phone-ribbon.component.html',
  styleUrls: ['./phone-ribbon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhoneRibbonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
