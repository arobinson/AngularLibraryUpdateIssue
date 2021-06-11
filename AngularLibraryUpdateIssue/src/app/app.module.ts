import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExampleLibraryModule } from 'example-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExampleLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
