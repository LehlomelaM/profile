import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
})
export class ProjectCard {
  readonly title = input.required<string>();
  readonly tag = input.required<string>();
  readonly description = input.required<string>();
  readonly primaryLabel = input.required<string>();
  readonly primaryHref = input.required<string>();
  readonly primaryAria = input.required<string>();
  readonly secondaryLabel = input.required<string>();
  readonly secondaryHref = input.required<string>();
  readonly secondaryAria = input.required<string>();
}
