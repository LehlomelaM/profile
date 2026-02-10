import { Component } from '@angular/core';
import { ProjectCard } from '../project-card/project-card';
import { SectionHeader } from '../../shared/section-header/section-header';
import { siteContent } from '../../../content';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCard, SectionHeader],
  templateUrl: './projects-section.html',
})
export class ProjectsSection {
  readonly content = siteContent.projects;
}
