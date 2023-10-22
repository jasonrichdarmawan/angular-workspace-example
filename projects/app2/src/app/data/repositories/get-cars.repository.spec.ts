import { TestBed } from '@angular/core/testing';

import { GetCarsRepositoryImpl } from './get-cars.repository.impl';
import { GetCarsRepository } from '../../domain/repositories/get-cars.repository';

describe('GetCarsRepository', () => {
  let service: GetCarsRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCarsRepositoryImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
