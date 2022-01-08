import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-la-sposa-template',
  templateUrl: './la-sposa-template.component.html',
  styleUrls: ['./la-sposa-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaSposaTemplateComponent implements OnInit {

  @Input() title: string = '';
  @Input() galleryImages: string[] = [];

  trigerred = false;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.trigerred = true;
      this.cdr.markForCheck();
    }, 300);
  }

}
