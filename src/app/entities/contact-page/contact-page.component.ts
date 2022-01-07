import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BUSSINESS_ADDRESS, contactInfoItems } from './model/contact-info.model';

@Component({
  selector: 'luna-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  readonly googleMapsKey = 'AIzaSyCKABfmlHXaYSU3mFv1CJcYsfdK2ht58A0';
  contactInfoItems = contactInfoItems;

  constructor(private domSanitizer: DomSanitizer) {}

  get mapSrc() {
    const url = `https://www.google.com/maps/embed/v1/place?key=${this.googleMapsKey}&q=${BUSSINESS_ADDRESS}&zoom=19`;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
