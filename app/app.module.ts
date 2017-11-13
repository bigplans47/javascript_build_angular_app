import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule ], // this is modules of sort
  declarations: [ AppComponent ], //this is components
  bootstrap: [ AppComponent ] //components required immediately on launch of application
})

export class AppModule {

}
