import { TestBed } from '@angular/core/testing';

import { GetCarsRepositoryImpl } from './get-cars.repository.impl';
import { GET_CARS_REPOSITORY, GetCarsRepository } from '../../domain/repositories/get-cars.repository';
import { GET_CARS_DATA_SOURCE, GetCarsDataSourceImpl } from '../datasources/get-cars/get-cars.datasource';

describe('GetCarsRepository', () => {
  let service: GetCarsRepository;

  beforeEach(() => {
    const mockGetCarsDataSource = jasmine.createSpyObj(GET_CARS_DATA_SOURCE, [ 'fetchCars' ]);
    const mockGetCarsRepository = jasmine.createSpyObj(GET_CARS_REPOSITORY, [ 'getCars' ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: GET_CARS_DATA_SOURCE, useValue: mockGetCarsRepository },
        { provide: GET_CARS_REPOSITORY, useValue: mockGetCarsDataSource },
      ],
    });
    service = TestBed.inject(GET_CARS_REPOSITORY);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
