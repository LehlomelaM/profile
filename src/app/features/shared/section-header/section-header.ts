import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [],
  templateUrl: './section-header.html',
})
export class SectionHeader {
  readonly title = input.required<string>();
  readonly description = input.required<string>();
}
