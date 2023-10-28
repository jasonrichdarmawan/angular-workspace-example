import { Component, Inject, OnInit, Optional } from '@angular/core';
import { GET_COUNT, GetCount, GetCountImpl } from '../domain/usecases/get-count/get-count.usecase';
import { SET_COUNT, SetCount } from '../domain/usecases/set-count/set-count.usecase';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  count: number;

  constructor(
    @Inject(GET_COUNT) public get: GetCount,
    @Inject(SET_COUNT) public set: SetCount,
  ) {
    this.count = get.call();
  }

  ngOnInit(): void {
  }

  increment(by: number) {
    this.count += by;
    this.set.call(this.count);
  }

  decrement(by: number) {
    this.count -= by;
    this.set.call(this.count);
  }
}
