import { Component, OnInit } from '@angular/core';
import { environment as localEnvironment } from 'src/environments/environment';
import { environment as libraryEnvironment } from '@@environments';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {

  constructor() {
    console.log("app3", View1Component.name, localEnvironment, libraryEnvironment);
  }

  ngOnInit(): void {
  }

}
