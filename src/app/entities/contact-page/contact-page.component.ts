import { Component } from '@angular/core';
import { contactInfoItems, cords } from './model/contact-info.model';

@Component({
  selector: 'luna-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  contactInfoItems = contactInfoItems;

  mapOptions: google.maps.MapOptions = {
    maxZoom: 20,
    minZoom: 15,
    streetViewControl: false,
    fullscreenControl: false,
    center: cords,
    disableDefaultUI: true,
  };

  markerOptions: google.maps.MarkerOptions = {
    position: cords
  }
}
