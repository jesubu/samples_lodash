import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComponenteLodashComponent } from './componente-lodash/componente-lodash.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponenteLodashComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
