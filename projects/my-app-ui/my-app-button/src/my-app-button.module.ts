import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAppButtonComponent } from './my-app-button.component';



@NgModule({
  declarations: [
    MyAppButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MyAppButtonComponent,
  ],
})
export class MyAppButtonModule { }
