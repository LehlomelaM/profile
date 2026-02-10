import { Component } from '@angular/core';
import { BrandBlock } from '../brand-block/brand-block';
import { PrimaryNav } from '../primary-nav/primary-nav';

@Component({
  selector: 'app-site-header',
  imports: [BrandBlock, PrimaryNav],
  templateUrl: './site-header.html',
})
export class SiteHeader {

}
