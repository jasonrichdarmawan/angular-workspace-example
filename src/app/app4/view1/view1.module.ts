import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View1RoutingModule } from './view1-routing.module';
import { NavModule } from 'src/app/app4/nav/nav.module';
import { View1Component } from './view1.component';


@NgModule({
  declarations: [
    View1Component,
  ],
  imports: [
    CommonModule,
    View1RoutingModule,
    NavModule,
  ]
})
export class View1Module { }
