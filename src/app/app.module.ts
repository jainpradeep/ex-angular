import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ExAngularComponent } from './ex-angular/ex-angular.component';

@NgModule({
  declarations: [
    ExAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ExAngularComponent]
})

export class AppModule {
  constructor(private injector: Injector) {
    const myElement = createCustomElement(ExAngularComponent, { injector });
    customElements.define('ex-angular', myElement);
  }
  ngDoBootstrap() {}
}
