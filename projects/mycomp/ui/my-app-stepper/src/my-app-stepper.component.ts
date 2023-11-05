import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-app-stepper',
  templateUrl: './my-app-stepper.component.html',
  styleUrls: ['./my-app-stepper.component.css']
})
export class MyAppStepperComponent implements OnInit {
  count: number;

  constructor() {
    this.count = 0;
  }

  ngOnInit(): void {
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}
