/*
 *  Title:  app.module.ts
 *  Author: April Auger
 *  Date:   7 January 2020
 *  Description: The root module for the auger-one-way-binding app.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
