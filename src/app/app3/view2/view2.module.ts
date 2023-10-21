import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View2RoutingModule } from './view2-routing.module';
import { NavModule } from '../nav/nav.module';
import { View2Component } from './view2.component';


@NgModule({
  declarations: [
    View2Component,
  ],
  imports: [
    CommonModule,
    View2RoutingModule,
    NavModule,
  ],
})
export class View2Module { }
