import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'luna-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  readonly googleMapsKey = 'AIzaSyCKABfmlHXaYSU3mFv1CJcYsfdK2ht58A0';

  constructor(private domSanitizer: DomSanitizer) {}

  get mapSrc() {
    const url = `https://www.google.com/maps/embed/v1/place?key=${this.googleMapsKey}&q=$Beogradska 45/10, 11000 Beograd&zoom=19`;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
