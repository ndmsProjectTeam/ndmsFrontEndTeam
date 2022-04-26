import { Directive, HostBinding, Inject, Input, OnDestroy, OnInit } from '@angular/core';

import { AccordianDirective } from './accordian.directive';

@Directive({
  selector: '[appAccordianlink]'
})
export class AccordianlinkDirective implements OnInit, OnDestroy {
  @Input()
  public group: any;

  @HostBinding('class.selected')
  @Input()
  get selected(): boolean {
    return this._selected;
  }

  set selected(value: boolean) {
    this._selected = value;
    if (value) {
      this.nav.closeOtherLinks(this);
    }
  }

  protected _selected: boolean=false;
  protected nav: AccordianDirective;

  constructor(@Inject(AccordianDirective) nav: AccordianDirective) {
    this.nav = nav;
  }

  ngOnInit(): any {
    this.nav.addLink(this);
  }

  ngOnDestroy(): any {
    this.nav.removeGroup(this);
  }

  toggle(): any {
    this.selected = !this.selected;
  }
}
