import { TestBed } from '@angular/core/testing';

import { CountRepositoryImpl } from './count.repository.impl';

describe('CountRepository', () => {
  let service: CountRepositoryImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountRepositoryImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
