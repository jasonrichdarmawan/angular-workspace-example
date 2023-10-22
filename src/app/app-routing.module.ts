/**
 * @version 1 always compile, more work.
*/
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: 'app1/one', loadChildren: () => import("projects/app1/src/app/view1/view1.module").then(m => m.View1Module) },
//   { path: 'app1/two', loadChildren: () => import("projects/app1/src/app/view2/view2.module").then(m => m.View2Module) },
//   { path: 'app1', redirectTo: '/app1/one' },

//   { path: 'app2/one', loadChildren: () => import("projects/app2/src/app/view1/view1.module").then(m => m.View1Module) },
//   { path: 'app2/two', loadChildren: () => import("projects/app2/src/app/view2/view2.module").then(m => m.View2Module) },
//   { path: 'app2', redirectTo: '/app2/one' },

//   { path: 'app3', loadChildren: () => import("./app3/app3.module").then(m => m.App3Module) },

//   { path: '**', redirectTo: '/app1/one' },
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes),
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

/**
 * @version 2 always compile, less work.
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes as app1Routes } from 'projects/app1/src/app/app-routing.module';
import { routes as app2Routes } from 'projects/app2/src/app/app-routing.module';

const routes: Routes = [
  ...app1Routes,

  ...app2Routes,

  { path: 'app3', loadChildren: () => import("./app3/app3.module").then(m => m.App3Module) },

  { path: '**', redirectTo: '/app1/one' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * @version 3 always compile
 * @bug do not work with Angular Universal
*/
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { App1SharedModule } from 'projects/app1/src/app/app.module';
// import { App2SharedModule } from 'projects/app2/src/app/app.module';

// const routes: Routes = [
//   { path: 'app3', loadChildren: () => import("./app3/app3.module").then(m => m.App3Module) },

//   { path: '**', redirectTo: '/app1/one' },
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes),
//     App1SharedModule.forRoot(),
//     App2SharedModule.forRoot(),
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

/**
 * @version 4 compile only when needed
 * @bug when the browser go to /app1/one, App2 is downloaded as well.
 */
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { App1SharedModule } from '@@app1';
// import { App2SharedModule } from '@@app2';

// const routes: Routes = [
//   { path: 'app3', loadChildren: () => import("./app3/app3.module").then(m => m.App3Module) },

//   { path: '**', redirectTo: '/app1/one' }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes),
//     // This Angular router module needs to know about these other routes in order to support lazy loading.
//     App1SharedModule.forRoot(),
//     App2SharedModule.forRoot(),
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

/**
 * @version 5 compile only when needed, more work.
 * @bug when the browser go to /app1/one, App1 View2Module is downloaded as well.
 */
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: 'app1/one', loadChildren: () => import("@@app1").then(m => m.View1Module) },
//   { path: 'app1/two', loadChildren: () => import("@@app1").then(m => m.View2Module) },
//   { path: 'app1', redirectTo: '/app1/one' },

//   { path: 'app2/one', loadChildren: () => import("@@app2").then(m => m.View1Module) },
//   { path: 'app2/two', loadChildren: () => import("@@app2").then(m => m.View2Module) },
//   { path: 'app2', redirectTo: '/app2/one' },

//   { path: 'app3', loadChildren: () => import("./app3/app3.module").then(m => m.App3Module) },

//   { path: '**', redirectTo: '/app1/one' }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes),
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }