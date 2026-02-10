import { Component } from '@angular/core';
import { InfoCard } from '../../about/info-card/info-card';
import { SectionHeader } from '../../shared/section-header/section-header';
import { siteContent } from '../../../content';

@Component({
  selector: 'app-capabilities-section',
  imports: [InfoCard, SectionHeader],
  templateUrl: './capabilities-section.html',
})
export class CapabilitiesSection {
  readonly content = siteContent.capabilities;
}
