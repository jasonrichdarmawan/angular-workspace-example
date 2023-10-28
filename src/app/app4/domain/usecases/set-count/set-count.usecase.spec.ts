import { TestBed } from '@angular/core/testing';

import { SetCountImpl } from './set-count.service';

describe('SetCount', () => {
  let service: SetCountImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetCountImpl);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
