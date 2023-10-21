import { App1SharedModule } from '@@app1';
import { App2SharedModule } from '@@app2';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import("@@app1").then(m => m.App1SharedModule) },
  { path: '', loadChildren: () => import("@@app2").then(m => m.App2SharedModule) },
  { path: '', loadChildren: () => import("./app3/app3.module").then(m => m.App3Module) },
  { path: '**', redirectTo: '/app1/one' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // This Angular router module needs to know about these other routes in order to support lazy loading.
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
