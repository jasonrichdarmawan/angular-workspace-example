import { TestBed } from '@angular/core/testing';

import { GET_CARS, GetCars, GetCarsImpl } from './get-cars.usecase';
import { GET_CARS_DATA_SOURCE } from '../../../data/datasources/get-cars/get-cars.datasource';
import { GET_CARS_REPOSITORY } from '../../repositories/get-cars.repository';
import { TransferState } from '@angular/platform-browser';

describe('GetCars', () => {
  let service: GetCars;

  beforeEach(() => {
    const mockGetCarsRepository = jasmine.createSpyObj([ 'getCars' ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: GET_CARS_REPOSITORY, useValue: mockGetCarsRepository },
        TransferState,
        { provide: GET_CARS, useValue: GetCarsImpl },
      ]
    });
    service = TestBed.inject(GET_CARS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
