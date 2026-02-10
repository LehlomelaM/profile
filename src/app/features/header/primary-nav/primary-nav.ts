import { Component } from '@angular/core';
import { siteContent } from '../../../content';

@Component({
  selector: 'app-primary-nav',
  imports: [],
  templateUrl: './primary-nav.html',
})
export class PrimaryNav {
  readonly links = siteContent.nav;
}
