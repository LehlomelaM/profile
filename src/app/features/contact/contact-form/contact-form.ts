import { Component } from '@angular/core';
import { siteContent } from '../../../content';

@Component({
  selector: 'app-contact-form',
  imports: [],
  templateUrl: './contact-form.html',
})
export class ContactForm {
  readonly content = siteContent.contact.form;
}
