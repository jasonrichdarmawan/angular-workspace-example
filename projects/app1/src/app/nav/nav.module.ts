import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';

const providers: Provider[] = [
];

@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
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