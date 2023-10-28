import { TestBed } from '@angular/core/testing';

import { GET_CARS_REPOSITORY, GetCarsRepository } from '../../domain/repositories/get-cars.repository';
import { GET_CARS_DATA_SOURCE } from '../datasources/get-cars/get-cars.datasource';
import { GetCarsRepositoryImpl } from './get-cars.repository.impl';

describe('GetCarsRepository', () => {
  let service: GetCarsRepository;

  beforeEach(() => {
    const mockGetCarsDataSource = jasmine.createSpyObj([ 'fetchCars' ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: GET_CARS_DATA_SOURCE, useValue: mockGetCarsDataSource },
        { provide: GET_CARS_REPOSITORY, useValue: GetCarsRepositoryImpl },
      ],
    });
    service = TestBed.inject(GET_CARS_REPOSITORY);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
