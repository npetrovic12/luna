import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { ContentCard } from 'src/app/entities/home-page/model/content-card.model';

@Component({
  selector: 'app-st-patrick-template',
  templateUrl: './st-patrick-template.component.html',
  styleUrls: ['./st-patrick-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StPatrickTemplateComponent implements OnInit {

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
