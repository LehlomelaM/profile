import { Component } from '@angular/core';
import { siteContent } from '../../../content';

@Component({
  selector: 'app-hero-image',
  imports: [],
  templateUrl: './hero-image.html',
})
export class HeroImage {
  readonly image = siteContent.hero.image;
}
