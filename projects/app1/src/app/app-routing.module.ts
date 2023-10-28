import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'app1/one', loadChildren: () => import("./view1/view1.module").then(m => m.View1Module) },
  { path: 'app1/two', loadChildren: () => import("./view2/view2.module").then(m => m.View2Module) },
  { 
    path: '',
    redirectTo: 'app1/one', 
    pathMatch: 'full', 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
