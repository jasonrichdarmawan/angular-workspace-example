import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View1RoutingModule } from './view1-routing.module';
import { View1Component } from './view1.component';
import { NavModule } from 'projects/app2/src/app/nav/nav.module';
import { GetCarsService } from 'projects/app2/src/app/domain/usecases/get-cars/get-cars.service';


@NgModule({
  declarations: [
    View1Component,
  ],
  imports: [
    CommonModule,
    View1RoutingModule,
    NavModule,
  ],
  providers: [
    GetCarsService,
  ]
})
export class View1Module { }