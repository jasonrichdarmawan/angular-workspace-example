import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Observable, of, tap } from 'rxjs';
import { GET_CARS_REPOSITORY, GetCarsRepository } from '../../repositories/get-cars.repository';

export const CARS = makeStateKey<string[]>('cars');

export const GET_CARS = new InjectionToken<GetCars>("GetCars");

export interface GetCars {
  call(): Observable<string[]>;
}

@Injectable()
export class GetCarsImpl implements GetCars {
  isServer: boolean;

  constructor(
    @Inject(PLATFORM_ID) platformID: string,
    private transferState: TransferState,
    @Inject(GET_CARS_REPOSITORY) private getCarsRepository: GetCarsRepository,
  ) {
    this.isServer = isPlatformServer(platformID);
  }

  call(): Observable<string[]> {
    console.log(GetCarsImpl.name, this.call.name, "called");

    const data = this.transferState.get(CARS, undefined);

    if (data) {
      return of(data);
    }

    return this.getCarsRepository.getCars().pipe(
      tap((data) => {
        if (this.isServer) {
          this.transferState.set(CARS, data);
        }
      })
    )
  }
}
