import { TestBed } from '@angular/core/testing';

import { GET_COUNT, GetCount, GetCountImpl } from './get-count.usecase';
import { COUNT_REPOSITORY } from '../../repositories/count.repository';

describe('GetCountService', () => {
  let service: GetCount;

  beforeEach(() => {
    const mockCountRepository = jasmine.createSpyObj([ 'get', 'set' ])
    TestBed.configureTestingModule({
      providers: [
        { provide: COUNT_REPOSITORY, useValue: mockCountRepository },
        { provide: GET_COUNT, useClass: GetCountImpl, },
      ],
    });
    service = TestBed.inject(GET_COUNT);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
