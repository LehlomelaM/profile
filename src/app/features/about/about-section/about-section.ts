import { Component } from '@angular/core';
import { InfoCard } from '../info-card/info-card';
import { SectionHeader } from '../../shared/section-header/section-header';
import { siteContent } from '../../../content';

@Component({
  selector: 'app-about-section',
  imports: [InfoCard, SectionHeader],
  templateUrl: './about-section.html',
})
export class AboutSection {
  readonly content = siteContent.about;
}
