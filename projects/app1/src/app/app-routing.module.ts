import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { View1SharedModule } from './view1/view1.module';
import { View2SharedModule } from './view2/view2.module';

const routes: Routes = [
  { path: 'app1/one', loadChildren: () => import("./view1/view1.module").then(m => m.View1Module) },
  { path: 'app1/two', loadChildren: () => import("./view2/view2.module").then(m => m.View2Module) },
  { path: 'app1', redirectTo: 'app1/one' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    View1SharedModule.forRoot(),
    View2SharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
