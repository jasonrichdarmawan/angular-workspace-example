import { Component, OnInit } from '@angular/core';
import { environment as localEnvironment } from '../../environments/environment';
import { environment as libraryEnvironment } from '@@environments';
import { GetCarsService } from '../domain/usecases/get-cars/get-cars.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  cars: Observable<string[]>

  constructor(
    getCars: GetCarsService,
  ) {
    console.log("app2", View1Component.name, localEnvironment, libraryEnvironment);
    this.cars = getCars.call();
  }

  ngOnInit(): void {
  }

}
