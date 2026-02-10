import { Component } from '@angular/core';
import { siteContent } from '../../../content';

@Component({
  selector: 'app-contact-card',
  imports: [],
  templateUrl: './contact-card.html',
})
export class ContactCard {
  readonly items = siteContent.contact.info;
}
