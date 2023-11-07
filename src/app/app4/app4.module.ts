import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App4RoutingModule } from './app4-routing.module';
import { COUNT, COUNT_DATA_SOURCE, CountLocalDataSource } from '@mycomp/service/count';
import { COUNT_REPOSITORY } from '@mycomp/service/count';
import { GET_COUNT, GetCountImpl } from '@mycomp/service/count';
import { SET_COUNT, SetCountImpl } from '@mycomp/service/count';
import { CountRepositoryImpl } from '@mycomp/service/count';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    App4RoutingModule,
  ],
  providers: [
    { provide: COUNT, useValue: 0 },
    { provide: COUNT_DATA_SOURCE, useClass: CountLocalDataSource },
    { provide: COUNT_REPOSITORY, useClass: CountRepositoryImpl },
    { provide: GET_COUNT, useClass: GetCountImpl },
    { provide: SET_COUNT, useClass: SetCountImpl },
  ]
})
export class App4Module { }
