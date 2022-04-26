import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianDirective } from './accordian/accordian.directive';
import { AccordiananchorDirective } from './accordian/accordiananchor.directive';
import { AccordianlinkDirective } from './accordian/accordianlink.directive';


@NgModule({
  declarations: [
    AccordianDirective,
    AccordiananchorDirective,
    AccordianlinkDirective
  ],
  exports: [
    AccordianDirective,
    AccordiananchorDirective,
    AccordianlinkDirective
   ],
  providers:[]
})
export class SharedModule { }
