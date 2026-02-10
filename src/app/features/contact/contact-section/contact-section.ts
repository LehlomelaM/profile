import { Component } from '@angular/core';
import { ContactCard } from '../contact-card/contact-card';
import { ContactForm } from '../contact-form/contact-form';
import { SectionHeader } from '../../shared/section-header/section-header';
import { siteContent } from '../../../content';

@Component({
  selector: 'app-contact-section',
  imports: [ContactCard, ContactForm, SectionHeader],
  templateUrl: './contact-section.html',
})
export class ContactSection {
  readonly content = siteContent.contact;
}
