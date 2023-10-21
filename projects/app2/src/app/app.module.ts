import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1SharedModule } from './view1/view1.module';
import { View2SharedModule } from './view2/view2.module';

const providers: Provider[] = [
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    View1SharedModule.forRoot(),
    View2SharedModule.forRoot(),
  ],
  providers: providers,
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class App2SharedModule{
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}
