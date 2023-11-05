import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View1RoutingModule } from './view1-routing.module';
import { View1Component } from './view1.component';
import { NavModule } from '../nav/nav.module';
import { MyAppStepperModule } from '@mycomp/ui/my-app-stepper';


@NgModule({
  declarations: [
    View1Component
  ],
  imports: [
    CommonModule,
    View1RoutingModule,
    NavModule,
    MyAppStepperModule,
  ]
})
export class View1Module { }
