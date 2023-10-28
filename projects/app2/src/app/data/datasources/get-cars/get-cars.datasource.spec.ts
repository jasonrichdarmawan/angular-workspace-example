import { TestBed } from '@angular/core/testing';

import { GET_CARS_DATA_SOURCE, GetCarsDataSource, GetCarsDataSourceImpl } from './get-cars.datasource';

describe('GetCarsDataSource', () => {
  let service: GetCarsDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: GET_CARS_DATA_SOURCE, useValue: GetCarsDataSourceImpl },
      ],
    });
    service = TestBed.inject(GET_CARS_DATA_SOURCE);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
