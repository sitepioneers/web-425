/*
 *  Title:  app.module.ts
 *  Author: April Auger
 *  Date:   9 January 2020
 *  Description: The root module for the auger-two-way-binding app.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	BrowserModule,
	  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
