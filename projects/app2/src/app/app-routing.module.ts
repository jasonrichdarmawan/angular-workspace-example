import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'app2/one', loadChildren: () => import("./view1/view1.module").then(m => m.View1Module) },
  { path: 'app2/two', loadChildren: () => import("./view2/view2.module").then(m => m.View2Module) },
  { path: 'app2', redirectTo: '/app2/one' },
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
