import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAppCheckboxComponent } from './my-app-checkbox.component';



@NgModule({
  declarations: [
    MyAppCheckboxComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MyAppCheckboxComponent,
  ]
})
export class MyAppCheckboxModule { }
