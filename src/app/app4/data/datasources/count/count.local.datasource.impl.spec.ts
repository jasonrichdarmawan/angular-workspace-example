import { TestBed } from '@angular/core/testing';

import { CountLocalDataSource } from './count.local.datasource.impl';

describe('CountLocalDataSource', () => {
  let service: CountLocalDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountLocalDataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
