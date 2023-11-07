import { TestBed } from '@angular/core/testing';

import { COUNT, COUNT_DATA_SOURCE, CountDataSource, CountLocalDataSource } from './count.local.datasource.impl';

describe('CountLocalDataSource', () => {
  let service: CountDataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: COUNT, useValue: 0 },
        { provide: COUNT_DATA_SOURCE, useClass: CountLocalDataSource },
      ]
    });
    service = TestBed.inject(COUNT_DATA_SOURCE);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
