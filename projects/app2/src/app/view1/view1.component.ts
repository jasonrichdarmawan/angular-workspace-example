import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { environment as localEnvironment } from 'projects/app2/src/environments/environment';
import { environment as rootEnvironment } from 'src/environments/environment';
import { GET_CARS, GetCars } from 'projects/app2/src/app/domain/usecases/get-cars/get-cars.usecase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  cars: Observable<string[]>

  constructor(
    @Inject(GET_CARS) private getCars: GetCars,
  ) {
    console.log("app2", View1Component.name, localEnvironment, rootEnvironment);

    this.cars = this.getCars.call();
  }

  ngOnInit(): void {
  }
}
