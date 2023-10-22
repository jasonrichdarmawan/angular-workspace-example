import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { View1RoutingModule } from './view1-routing.module';
import { View1Component } from './view1.component';
import { NavModule } from '../nav/nav.module';
import { GET_CARS, GetCarsImpl } from '../domain/usecases/get-cars/get-cars.usecase';
import { GET_CARS_DATA_SOURCE, GetCarsDataSourceImpl } from '../data/datasources/get-cars/get-cars.datasource';
import { GetCarsRepositoryImpl } from '../data/repositories/get-cars.repository.impl';
import { GET_CARS_REPOSITORY } from '../domain/repositories/get-cars.repository';


@NgModule({
  declarations: [
    View1Component,
  ],
  imports: [
    CommonModule,
    View1RoutingModule,
    NavModule,
  ],
  providers: [
    { provide: GET_CARS_DATA_SOURCE, useClass: GetCarsDataSourceImpl },
    { provide: GET_CARS_REPOSITORY, useClass: GetCarsRepositoryImpl },
    { provide: GET_CARS, useClass: GetCarsImpl },
  ]
})
export class View1Module { }