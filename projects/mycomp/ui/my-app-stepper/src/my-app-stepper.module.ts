import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAppStepperComponent } from './my-app-stepper.component';



@NgModule({
  declarations: [
    MyAppStepperComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MyAppStepperComponent,
  ],
})
export class MyAppStepperModule { }
