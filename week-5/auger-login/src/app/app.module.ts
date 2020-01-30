/*
 *  Title:  app.module.ts
 *  Author: April Auger
 *  Date:   29 January 2020
 *  Description: The root module for the auger-login app.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatButtonModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatCard } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	MatCardModule,
	MatButtonModule,
	MatToolbarModule,
	MatFormFieldModule,
	MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
