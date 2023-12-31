import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View2RoutingModule } from './view2-routing.module';
import { NavModule } from 'src/app/app3/nav/nav.module';
import { View2Component } from './view2.component';

import { MyAppButtonModule } from '@mycomp/ui/my-app-button';
import { MyAppCheckboxModule } from '@mycomp/ui/my-app-checkbox';
// import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    View2Component,
  ],
  imports: [
    CommonModule,
    View2RoutingModule,
    NavModule,

    /**
     * @important [Sharing modules pattern](https://angular.io/guide/sharing-ngmodules) is not encouraged.
     * @reason although Sharing modules pattern is tree-shakeable. As a developer, we will not know which module is used by our view.
     * @example why Sharing modules pattern is anti pattern.
     * /app3/view1 import MyAppUIModule and use MyAppButtonModule.
     * /app3/view2 import MyAppUIModule and use MyAppButtonModule and MyAppCheckboxModule.
     * when a user visit /app3/view2 then navigate to /app3/view1, it will import MyAppButtonModule again.
     */
    // MyAppUIModule,

    MyAppButtonModule,
    MyAppCheckboxModule,

    // SharedModule,
  ],
})
export class View2Module { }
