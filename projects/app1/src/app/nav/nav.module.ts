import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavRoutingModule } from './nav-routing.module';
import { NavComponent } from './nav.component';

const providers: Provider[] = [
];

@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    CommonModule,
    NavRoutingModule,
  ],
  exports: [
    NavComponent,
  ],
  providers: providers,
})
export class NavModule { }

@NgModule({})
export class NavSharedModule {
  static forRoot(): ModuleWithProviders<NavModule> {
    return {
      ngModule: NavModule,
      providers: providers,
    }
  }
}