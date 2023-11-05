import { NgModule } from '@angular/core';
import { MyAppButtonModule } from '@mycomp/ui/my-app-button';
import { MyAppCheckboxModule } from '@mycomp/ui/my-app-checkbox';


/**
 * @deprecated do not use `SharedModule`, it is not tree-shakable
 * 
 * Known effects:
 * 1. importing `SharedModule` in `app.module.ts` -> which do not use anything from `SharedModule`
 *    will make the `main.js` file to include `MyAppButtonModule` and `MyAppCheckboxModule`
 * 2. importing `SharedModule` in:
 *      1. the `app3/view1/view1.module.ts` file -> which only use `MyAppButtonModule`
 *      2. the `app3/view2/view2.module.ts` file -> which only use `MyAppCheckboxModule`
 *    will make the `common.js` file to include `MyAppButtonModule` and `MyAppCheckboxModule`
 * 
 * the `@angular-devkit/build-angular:browser` or `npx ng build` is smart but not that smart:
 * 1. it can detect NgModule that is imported more than once by other NgModules.
 *    it will make the NgModule part of the `common.js` file.
 *    so, just import `MyAppButtonModule` or `MyAppCheckboxModule` directly.
 * 2. if we import `SharedModule`
 *    it will make `SharedModule` part of the `main.js` file or the `common.js` file, depending on how we import it.
 */
@NgModule({
  declarations: [

  ],
  imports: [
  ],
  exports: [
    MyAppButtonModule,
    MyAppCheckboxModule,
  ],
})
export class SharedModule { }
