import { Component, input } from '@angular/core';
import { siteContent } from '../../../content';

@Component({
  selector: 'app-site-footer',
  imports: [],
  templateUrl: './site-footer.html',
})
export class SiteFooter {
  readonly year = input.required<number>();
  readonly footer = siteContent.footer;
}
