import { Injectable, InjectionToken } from '@angular/core';
import { Observable, delay, interval, map, take } from 'rxjs';

export const GET_CARS_DATA_SOURCE = new InjectionToken<GetCarsDataSource>("GetCarsDataSource");

export interface GetCarsDataSource {
  fetchCars: () => Observable<string[]>;
}

@Injectable()
export class GetCarsDataSourceImpl implements GetCarsDataSource {

  constructor() { }

  fetchCars(): Observable<string[]> {
    console.log(GetCarsDataSourceImpl.name, this.fetchCars.name, "called");

    const cars = ["Car 1", "Car 2", "Car 3"];

    return interval(1000)
      .pipe(
        take(3),
        map(index => cars.slice(0, index + 1))
      );
  }
}
