import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View2RoutingModule } from './view2-routing.module';
import { View2Component } from './view2.component';
import { NavModule } from '../nav/nav.module';
import { MyAppImageModule } from 'src/app/shared/ui/my-app-image/my-app-image.module';


@NgModule({
  declarations: [
    View2Component
  ],
  imports: [
    CommonModule,
    View2RoutingModule,
    NavModule,
    MyAppImageModule
  ]
})
export class View2Module { }
