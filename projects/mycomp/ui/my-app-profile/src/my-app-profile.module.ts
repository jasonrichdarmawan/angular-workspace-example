import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAppProfileComponent } from './my-app-profile.component';

// library can't import non library.
// this is a problem when migrating ui component as a library if the ui component rely on other ui component which has not been migrated.
// import { MyAppImageModule } from 'src/app/shared/ui/my-app-image/my-app-image.module';



@NgModule({
  declarations: [
    MyAppProfileComponent
  ],
  imports: [
    CommonModule,
    // MyAppImageModule,
  ]
})
export class MyAppProfileModule { }
