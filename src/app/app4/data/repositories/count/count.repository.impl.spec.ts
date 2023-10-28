import { TestBed } from '@angular/core/testing';

import { CountRepositoryImpl } from './count.repository.impl';
import { COUNT_DATA_SOURCE } from '../../datasources/count/count.local.datasource.impl';
import { COUNT_REPOSITORY, CountRepository } from 'src/app/app4/domain/repositories/count.repository';

describe('CountRepository', () => {
  let service: CountRepository;

  beforeEach(() => {
    const mockCountDataSource = jasmine.createSpyObj([ 'get', 'set' ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: COUNT_DATA_SOURCE, useValue: mockCountDataSource },
        { provide: COUNT_REPOSITORY, useClass: CountRepositoryImpl },
      ]
    });
    service = TestBed.inject(COUNT_REPOSITORY);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
