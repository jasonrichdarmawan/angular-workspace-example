import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View1RoutingModule } from './view1-routing.module';
import { View1Component } from './view1.component';
import { NavSharedModule } from '../nav/nav.module';


@NgModule({
  declarations: [
    View1Component,
  ],
  imports: [
    CommonModule,
    View1RoutingModule,
    NavSharedModule.forRoot(),
  ]
})
export class View1Module { }

@NgModule({})
export class View1SharedModule{
  static forRoot(): ModuleWithProviders<View1Module> {
    return {
      ngModule: View1Module,
      providers: []
    }
  }
}