import { Component } from '@angular/core';
import { AboutSection } from './features/about/about-section/about-section';
import { ContactSection } from './features/contact/contact-section/contact-section';
import { HeroSection } from './features/hero/hero-section/hero-section';
import { CapabilitiesSection } from './features/capabilities/capabilities-section/capabilities-section';
import { SiteFooter } from './features/footer/site-footer/site-footer';
import { SiteHeader } from './features/header/site-header/site-header';

@Component({
  selector: 'app-root',
  imports: [
    AboutSection,
    CapabilitiesSection,
    ContactSection,
    HeroSection,
    SiteFooter,
    SiteHeader
  ],
  templateUrl: './app.html',
})
export class App {
  readonly currentYear = new Date().getFullYear();
}
