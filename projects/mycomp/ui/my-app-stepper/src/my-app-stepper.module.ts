import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAppStepperComponent } from './my-app-stepper.component';
import { MyAppButtonModule } from '@mycomp/ui/my-app-button';



@NgModule({
  declarations: [
    MyAppStepperComponent,
  ],
  imports: [
    CommonModule,
    MyAppButtonModule
  ],
  exports: [
    MyAppStepperComponent,
  ],
})
export class MyAppStepperModule { }
