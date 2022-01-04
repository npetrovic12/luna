import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-nicole-couture-template',
  templateUrl: './nicole-couture-template.component.html',
  styleUrls: ['./nicole-couture-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NicoleCoutureTemplateComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
