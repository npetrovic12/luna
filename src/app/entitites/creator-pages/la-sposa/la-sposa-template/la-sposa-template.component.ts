import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-la-sposa-template',
  templateUrl: './la-sposa-template.component.html',
  styleUrls: ['./la-sposa-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaSposaTemplateComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
