# To Do

<s>
- [ ] lazy loaded library.

    current solution is to import to the `projects` folder instead of the `dist` folder.

    NOTICE: Do not use the `app1-lib` or `app2-lib` projects, for now.

    Reference: https://stackoverflow.com/questions/69257652/build-error-while-doing-lazy-loading-of-modules

- [ ] `fileReplacements` in angular.json of a library.

    ```
    npx ng build environments --configuration=development
    ```

    or

    ```
    npx ng build environments --configuration=production
    ```

    NOTICE: Do not use the `environments`, `app1-lib`, `app2-lib` projects, for now.
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
