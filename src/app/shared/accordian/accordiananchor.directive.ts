import { Directive, HostListener, Inject } from '@angular/core';

import { AccordianlinkDirective } from './accordianlink.directive';

@Directive({
  selector: '[appAccordiananchor]'
})
export class AccordiananchorDirective {
  protected navlink: AccordianlinkDirective;

  constructor(@Inject(AccordianlinkDirective) navlink: AccordianlinkDirective) {
    this.navlink = navlink;
  }

  @HostListener('click', ['$event'])
  onClick(e: any) {
    this.navlink.toggle();
  }
}
