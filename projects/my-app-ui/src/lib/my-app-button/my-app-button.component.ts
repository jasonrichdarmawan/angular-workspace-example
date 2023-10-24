// reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_outline_buttons

import { Component, ElementRef, OnInit } from '@angular/core';

export enum MY_APP_BUTTON_SELECTOR {
  DEFAULT = 'app-my-app-button',
  DANGER = 'app-my-app-button-danger',
  WARNING = 'app-my-app-button-warning',
  INFO = 'app-my-app-button-info',
  SUCCESS = 'app-my-app-button-success'
}
@Component({
  selector: `
    app-my-app-button, 
    app-my-app-button-danger, 
    app-my-app-button-warning, 
    app-my-app-button-info, 
    app-my-app-button-success
  `,
  templateUrl: './my-app-button.component.html',
  styleUrls: ['./my-app-button.component.scss']
})
export class MyAppButtonComponent implements OnInit {
  public MY_APP_BUTTON_SELECTOR = MY_APP_BUTTON_SELECTOR;
  
  selector: MY_APP_BUTTON_SELECTOR;

  constructor(elem: ElementRef<HTMLElement>) {
    console.log(elem.nativeElement.tagName.toLowerCase());

    const tagName = elem.nativeElement.tagName.toLowerCase() as MY_APP_BUTTON_SELECTOR;
    this.selector = tagName;
  }

  ngOnInit(): void {
  }

}
