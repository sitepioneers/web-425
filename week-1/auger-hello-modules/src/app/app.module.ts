/*
 *  Title:  app.component.ts
 *  Author: April Auger
 *  Date:   20 December 2019
 *  Description: The root module for the auger-hello-modules app.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShippingModule } from './shipping/shipping.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
	BrowserModule,
	ShippingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
