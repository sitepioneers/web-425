/*
 *  Title:  app.module.ts
 *  Author: April Auger
 *  Date:   23 January 2020
 *  Description: The root module for the auger-async-pipe app.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitService } from './fruit.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FruitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
