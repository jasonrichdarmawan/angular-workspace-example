import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View1RoutingModule } from './view1-routing.module';
import { View1Component } from './view1.component';
import { NavModule } from 'projects/app1/src/app/nav/nav.module';
import { GetUsersPipe } from 'projects/app1/src/app/domain/usecases/get-users-pipe/get-users.pipe';
import { GetUsersService } from 'projects/app1/src/app/domain/usecases/get-users-service/get-users.service';

const providers: Provider[] = [
  GetUsersService,
];

@NgModule({
  declarations: [
    View1Component,

    // TODO: angular 14 standalone component
    GetUsersPipe,
  ],
  imports: [
    CommonModule,
    View1RoutingModule,
    NavModule,
  ],
  providers: providers
})
export class View1Module { }