import { TestBed } from '@angular/core/testing';

import { GetCars, GetCarsImpl } from './get-cars.usecase';

describe('GetCars', () => {
  let service: GetCars;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCarsImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
