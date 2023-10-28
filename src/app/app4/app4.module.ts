import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { App4RoutingModule } from './app4-routing.module';
import { COUNT, COUNT_DATA_SOURCE, CountLocalDataSource } from './data/datasources/count/count.local.datasource.impl';
import { COUNT_REPOSITORY } from './domain/repositories/count.repository';
import { GET_COUNT, GetCountImpl } from './domain/usecases/get-count/get-count.usecase';
import { SET_COUNT, SetCountImpl } from './domain/usecases/set-count/set-count.usecase';
import { CountRepositoryImpl } from './data/repositories/count/count.repository.impl';


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
