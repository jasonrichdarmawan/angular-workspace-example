import { Injectable } from '@angular/core';

@Injectable()
export class GetUsersService {

  constructor() { }

  call(): string[] {
    console.log(GetUsersService.name, this.call.name, "called");
    return ["User 1", "User 2", "User 3"];
  }
}
