import { TestBed } from '@angular/core/testing';

import { GetCarsDataSource, GetCarsDataSourceImpl } from './get-cars.datasource';

describe('GetCarsDataSource', () => {
  let service: GetCarsDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCarsDataSourceImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
