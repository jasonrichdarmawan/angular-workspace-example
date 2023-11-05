import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-app-image',
  templateUrl: './my-app-image.component.html',
  styleUrls: ['./my-app-image.component.scss']
})
export class MyAppImageComponent implements OnInit {
  @Input()
  src!: string;

  constructor() {}

  ngOnInit(): void {
  }

}
