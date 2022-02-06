import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { ContentCard } from '../model/content-card.model';

@Component({
  selector: 'app-la-sposa-template',
  templateUrl: './la-sposa-template.component.html',
  styleUrls: ['./la-sposa-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaSposaTemplateComponent implements OnInit {

  @Input() cards!: ContentCard[];

  @Input() title: string = '';
  @Input() galleryImages: string[] = [];

  activated = [false, false, false];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  activateCard(index: number) {
    this.activated[index] = true;
    this.cdr.detectChanges();
  }

}
