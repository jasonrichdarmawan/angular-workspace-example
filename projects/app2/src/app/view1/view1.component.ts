import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { environment as localEnvironment } from 'projects/app2/src/environments/environment';
import { environment as rootEnvironment } from 'src/environments/environment';
import { GetCarsService } from 'projects/app2/src/app/domain/usecases/get-cars/get-cars.service';
import { Observable, of, tap } from 'rxjs';
import { isPlatformServer } from '@angular/common';
import { TransferState, makeStateKey } from '@angular/platform-browser';

export const CARS = makeStateKey('cars');

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  cars: Observable<string[]>

  constructor(
    getCars: GetCarsService,
    @Inject(PLATFORM_ID) platformID: string,
    tState: TransferState,
  ) {
    console.log("app2", View1Component.name, localEnvironment, rootEnvironment);
    const isServer = isPlatformServer(platformID);

    if (tState.hasKey(CARS)) {
      this.cars = of(tState.get<string[]>(CARS, []));
      return;
    }

    this.cars = getCars.call().pipe(
      tap((data) => {
        if (isServer) {
          tState.set<string[]>(CARS, data);
          return;
        }
      })
    );
  }

  ngOnInit(): void {
  }

}
