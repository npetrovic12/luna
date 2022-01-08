import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ContactInfoItem } from '../../model/contact-info.model';

@Component({
  selector: 'luna-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactInfoComponent {
  @Input() contactInfoItems!: ContactInfoItem[];
}
