# To Do

- [ ] lazy loaded library.

- [ ] `fileReplacements` in angular.json of a library.

    ```
    npx ng build environments --configuration=development
    ```

    or

    ```
    npx ng build environments --configuration=production
    ```

# How to run the project

1. compile the App1 and the App2 as a **library**

```
npx ng build environments --configuration=development
npx ng build app1-lib --configuration=development
npx ng build app2-lib --configuration=development
```

2. run the server

```
npx ng serve
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
