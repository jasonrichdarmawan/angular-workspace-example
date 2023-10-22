import { Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const GET_CARS_DATA_SOURCE = new InjectionToken<GetCarsDataSource>("GetCarsDataSource");

export interface GetCarsDataSource {
  fetchCars: () => Observable<string[]>;
}

@Injectable()
export class GetCarsDataSourceImpl implements GetCarsDataSource {

  constructor() { }

  fetchCars(): Observable<string[]> {
    console.log(GetCarsDataSourceImpl.name, this.fetchCars.name, "called");

    return new Observable((subscribe) => {
      setTimeout(() => {
        subscribe.next(["Car 1", "Car 2", "Car 3"]);
        subscribe.complete();
      }, 3000);
    })
  }
}
