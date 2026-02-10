import { Component } from '@angular/core';
import { siteContent } from '../../../content';

@Component({
  selector: 'app-brand-block',
  imports: [],
  templateUrl: './brand-block.html',
})
export class BrandBlock {
  readonly content = siteContent.brand;
}
