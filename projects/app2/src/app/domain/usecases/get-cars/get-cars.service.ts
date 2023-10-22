import { Injectable } from '@angular/core';
import { Observable, of, scan } from 'rxjs';

@Injectable()
export class GetCarsService {

  constructor() { }

  call(): Observable<string[]> {
    console.log(GetCarsService.name, this.call.name, "called");
    return new Observable((subscribe) => {
      setTimeout(() => {
        subscribe.next(["Car 1", "Car 2", "Car 3"]);
        subscribe.complete();
      }, 3000);
    })
  }
}
