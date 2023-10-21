import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View2RoutingModule } from './view2-routing.module';
import { View2Component } from './view2.component';
import { NavModule } from '../nav/nav.module';

const providers: Provider[] = [
];

@NgModule({
  declarations: [
    View2Component,
  ],
  imports: [
    CommonModule,
    View2RoutingModule,
    NavModule,
  ],
  providers: providers,
})
export class View2Module { }

@NgModule({})
export class View2SharedModule{
  static forRoot(): ModuleWithProviders<View2Module> {
    return {
      ngModule: View2Module,
      providers: providers,
    }
  }
}