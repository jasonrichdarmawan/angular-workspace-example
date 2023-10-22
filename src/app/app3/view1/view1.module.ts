import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View1RoutingModule } from './view1-routing.module';
import { View1Component } from './view1.component';
import { NavModule } from 'src/app/app3/nav/nav.module';


@NgModule({
  declarations: [
    View1Component
  ],
  imports: [
    CommonModule,
    View1RoutingModule,
    NavModule,
  ]
})
export class View1Module { }
