import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'one',
    loadChildren: () => import("./view1/view1.module").then(m => m.View1Module),
  },
  {
    path: 'two',
    loadChildren: () => import("./view2/view2.module").then(m => m.View2Module),
  },
  {
    path: '',
    redirectTo: 'one',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class App4RoutingModule { }
