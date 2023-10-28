import { TestBed } from '@angular/core/testing';

import { GET_CARS, GetCars, GetCarsImpl } from './get-cars.usecase';
import { GET_CARS_DATA_SOURCE, GetCarsDataSourceImpl } from '../../../data/datasources/get-cars/get-cars.datasource';
import { GET_CARS_REPOSITORY } from '../../repositories/get-cars.repository';
import { GetCarsRepositoryImpl } from '../../../data/repositories/get-cars.repository.impl';
import { TransferState } from '@angular/platform-browser';

describe('GetCars', () => {
  let service: GetCars;

  beforeEach(() => {
    const mockGetCarsDataSource = jasmine.createSpyObj(GET_CARS_DATA_SOURCE, [ 'fetchCars' ]);
    const mockGetCarsRepository = jasmine.createSpyObj(GET_CARS_REPOSITORY, [ 'getCars' ]);
    const mockGetCars = jasmine.createSpyObj(GET_CARS, [ 'call' ])

    TestBed.configureTestingModule({
      providers: [
        { provide: GET_CARS_DATA_SOURCE, useValue: mockGetCarsDataSource },
        { provide: GET_CARS_REPOSITORY, useValue: mockGetCarsRepository },
        TransferState,
        { provide: GET_CARS, useValue: mockGetCars },
      ]
    });
    service = TestBed.inject(GET_CARS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
