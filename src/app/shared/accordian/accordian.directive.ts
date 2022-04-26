import { Directive,OnInit,AfterViewInit,AfterContentChecked } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { AccordianlinkDirective } from './accordianlink.directive';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[appAccordian]'
})
export class AccordianDirective implements AfterContentChecked {

  protected navlinks: Array<AccordianlinkDirective> = [];

  closeOtherLinks(selectedLink: AccordianlinkDirective): void {
    this.navlinks.forEach((link: AccordianlinkDirective) => {
      if (link !== selectedLink) {
        link.selected = false;
      }
    });
  }


  addLink(link: AccordianlinkDirective): void {
    this.navlinks.push(link);
  }

  removeGroup(link: AccordianlinkDirective): void {
    const index = this.navlinks.indexOf(link);
    if (index !== -1) {
      this.navlinks.splice(index, 1);
    }
  }

  checkOpenLinks() {
    this.navlinks.forEach((link: AccordianlinkDirective) => {
      if (link.group) {
        const routeUrl = this.router.url;
        const currentUrl = routeUrl.split('/');
        if (currentUrl.indexOf(link.group) > 0) {
          link.selected = true;
          this.closeOtherLinks(link);
        }
      }
    });
  }

  ngAfterContentChecked(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(e => this.checkOpenLinks());
  }

  constructor(private router: Router) { 
  setTimeout(() => this.checkOpenLinks());
  }
}
