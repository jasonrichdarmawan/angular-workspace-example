import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View2RoutingModule } from './view2-routing.module';
import { View2Component } from './view2.component';
import { NavSharedModule } from '../nav/nav.module';


@NgModule({
  declarations: [
    View2Component,
  ],
  imports: [
    CommonModule,
    View2RoutingModule,
    NavSharedModule.forRoot(),
  ]
})
export class View2Module { }

@NgModule({})
export class View2SharedModule{
  static forRoot(): ModuleWithProviders<View2Module> {
    return {
      ngModule: View2Module,
      providers: [],
    }
  }
}