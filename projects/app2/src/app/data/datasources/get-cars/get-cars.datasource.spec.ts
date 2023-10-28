import { TestBed } from '@angular/core/testing';

import { GET_CARS_DATA_SOURCE, GetCarsDataSource, GetCarsDataSourceImpl } from './get-cars.datasource';

describe('GetCarsDataSource', () => {
  let service: GetCarsDataSource;

  beforeEach(() => {
    const mockGetCarsDataSource = jasmine.createSpyObj(GET_CARS_DATA_SOURCE, [ 'fetchCars' ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: GET_CARS_DATA_SOURCE, useValue: mockGetCarsDataSource },
      ],
    });
    service = TestBed.inject(GET_CARS_DATA_SOURCE);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
