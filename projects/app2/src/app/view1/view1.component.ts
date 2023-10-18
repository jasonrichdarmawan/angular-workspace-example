import { Component, OnInit } from '@angular/core';
import { environment } from '@@environments';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {

  constructor() {
    console.log("hello world", environment);
  }

  ngOnInit(): void {
  }

}
