import { Component, input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  imports: [],
  templateUrl: './info-card.html',
})
export class InfoCard {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
