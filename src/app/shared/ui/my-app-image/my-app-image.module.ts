import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAppImageComponent } from './my-app-image.component';



@NgModule({
  declarations: [
    MyAppImageComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MyAppImageComponent,
  ]
})
export class MyAppImageModule { }
