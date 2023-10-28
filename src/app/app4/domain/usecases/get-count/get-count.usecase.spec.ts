import { TestBed } from '@angular/core/testing';

import { GetCountImpl } from './get-count.usecase';

describe('GetCountService', () => {
  let service: GetCountImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCountImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
