import { Component } from '@angular/core';
import { HeroImage } from '../hero-image/hero-image';
import { siteContent } from '../../../content';

@Component({
  selector: 'app-hero-section',
  imports: [HeroImage],
  templateUrl: './hero-section.html',
})
export class HeroSection {
  readonly content = siteContent.hero;
}
