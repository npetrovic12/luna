import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { ContentCard } from 'src/app/shared/components/content-card/content-card.model';

@Component({
  selector: 'app-nicole-couture-template',
  templateUrl: './nicole-couture-template.component.html',
  styleUrls: ['./nicole-couture-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NicoleCoutureTemplateComponent implements OnInit {

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
