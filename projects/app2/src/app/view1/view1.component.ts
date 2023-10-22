import { Component, OnInit } from '@angular/core';
import { environment as localEnvironment } from 'projects/app2/src/environments/environment';
import { environment as rootEnvironment } from 'src/environments/environment';
import { GetCarsService } from 'projects/app2/src/app/domain/usecases/get-cars/get-cars.service';
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
    console.log("app2", View1Component.name, localEnvironment, rootEnvironment);
    this.cars = getCars.call();
  }

  ngOnInit(): void {
  }

}
