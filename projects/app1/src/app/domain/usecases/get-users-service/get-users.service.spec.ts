import { TestBed } from '@angular/core/testing';

import { GetUsersService } from './get-users.service';

describe('GetUsersService', () => {
  let service: GetUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetUsersService,
      ]
    });
    service = TestBed.inject(GetUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
