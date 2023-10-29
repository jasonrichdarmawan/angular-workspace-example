# Summary

- Angular application MUST not be imported as a compiled angular library.
    1. 1st attempt: `public-api.ts` export `routes` of the compiled angular library.
    
       When a visit `/app1`, it will dwonload `/app1/view1` and `/app1/view2` modules, including the module's dependencies.

    2. 2nd attempt: `public-api.ts` export `View1Module` and `View2Module`.

       Same result. The problem is the main entry point.

    3. The next logical strategy is to create multiple entry points. one for `View1Module` and also for `View2Module`

       When you compile `View2Module`, you will get this error because `View2Module` import the source code of `NavModule` instead of the compiled angular library of `NavModule`.

       Yes, you read that right, since we chose the multiple entry points strategy. The CONSEQUENCE is that for every import that go up one directory, like this `import { NavModule } from '../nav/nav.module'`, must be imported as a compiled angular library, like this `import { NavModule } from 'dist-app1/src/nav/nav.module'`. 
       
       Now, try to right click the `NavModule` and select `Go to Definition`, it will lead you to the compiled Angular library instead of the source code. This completely ruined the developer experience. 

       ```
       ✖ Compiling with Angular sources in Ivy partial compilation mode. [object Object] Compilation failed. Watching for file changes...
       ```

    - Reference:
        - https://stackoverflow.com/questions/71015618/angular-12-library-builds-fails-with-error-object-object

- Angular library MUST be divided with multiple entry points.

    1. This is because the tree-shakable feature is disabled for the angular compiled library.
       Usually, when a user visit `/app3/view1` since it only use `MyAppButtonModule`, the user will not download `MyAppButtonCheckbox` (the tree-shakable feature is enabled).
        
       But since we have moved `MyAppButtonModule` and `MyAppButtonCheckbox` as an Angular library, and let say we use the `shared module` pattern for convinience by creating a module named `MyAppUIModule` that export `MyAppButtonModule` and `MyAppButtonCheckbox`, when a user visit `/app3/view1`, it will download both `MyAppButtonModule` and `MyAppButtonCheckbox` (the tree-shakable feature is DISABLED).

# Purpose of each app

- `/app1`: 
    - `/app1/view1`: proof of concept on how to use function wisely.
        - do not call function in HTML to get the data. call the function in constructor.
        - other alternative is to use the pipe.

- `/app2`: proof of concept on why Prerendering and/or Incremental Static Regeneration is important.
    - `/app2/view1`:
        - in Client Side Rendering, you will see `Car 1`, `Car 2`, `Car 3` in sequence.
        - in Server Side Rendering, you will see `Car 1`, `Car 2`, `Car 3` in one go after 3 seconds of loading.
    - `/app2/view2`: HTML rendered in server without delay.

- `/app3`: proof of concept compiled angular library with tree-shakable feature.
    - `/app3/view1`: the browser only download `<app-my-app-button>`. check the `common.js` for proof.
    - `/app3/view2`:
        - if you visit `/app3/view2` by clicking the navigation menu, the browser will only download `<app-my-app-checkbox>`
        - if you visit `/app3/view2` from the address bar, the browser will download `<app-my-app-button>` and `<app-my-app-checkbox>`.
            - since `<app-my-app-button>` is used by `/app3/view1` and `/app3/view2`, it will be downloaded in `common.js` while `<app-my-app-checkbox>` will be downloaded when you visit `/app3/view2`.

- `/app4`: proof of concept shared state between page `/app4/view1` and `/app4/view2`.

# To Do

- [x] lazy loaded NgModules from angular library

<s>
- [ ] lazy loaded routes from angular library.

    current solution is to import to the `projects` folder instead of the `dist` folder.

    NOTICE: Do not use the `@@app1` or `@@app2` to import, for now.

    Reference: https://stackoverflow.com/questions/69257652/build-error-while-doing-lazy-loading-of-modules

- [ ] `fileReplacements` in angular.json of a library.

    ```
    npx ng build environments --configuration=development
    ```

    or

    ```
    npx ng build environments --configuration=production
    ```

    NOTICE: Do not use the `@@environments`, `@@app1`, `@@app2` to import, for now.
</s>

# How to run the project

<s>
1. compile the App1 and the App2 as a **library**

    ```
    npx ng build environments --configuration=development
    npx ng build app1-lib --configuration=development
    npx ng build app2-lib --configuration=development
    ```
</s>

2. run the server

    development
    ```
    npm run dev:ssr
    ```

    production
    ```
    npm run build:ssr
    npm run serve:ssr
    ```

# How to run specific application

```
npx ng serve <application-name>
```

i.e.
```
npx ng serve app1
```

# Documentation

https://medium.com/disney-streaming/combining-multiple-angular-applications-into-a-single-one-e87d530d6527

https://levelup.gitconnected.com/a-beginners-guide-to-implementing-transferstate-in-angular-a313f3244f03

https://sandroroth.com/blog/angular-library

# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
