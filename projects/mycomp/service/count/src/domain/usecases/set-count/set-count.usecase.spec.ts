import { TestBed } from '@angular/core/testing';

import { SET_COUNT, SetCount, SetCountImpl } from './set-count.usecase';
import { COUNT_REPOSITORY } from '../../repositories/count.repository';

describe('SetCount', () => {
  let service: SetCount;

  beforeEach(() => {
    const mockCountRepository = jasmine.createSpyObj([ 'get', 'set' ])
    TestBed.configureTestingModule({
      providers: [
        { provide: COUNT_REPOSITORY, useValue: mockCountRepository },
        { provide: SET_COUNT, useClass: SetCountImpl },
      ],
    });
    service = TestBed.inject(SET_COUNT);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
