/*
 *  Title:  app.module.ts
 *  Author: April Auger
 *  Date:   22 February 2020
 *  Description: The root module for Bob's Computer Repair Shop app.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatDividerModule, MatListModule, MatCheckboxModule, MatIconModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	ReactiveFormsModule,
	BrowserAnimationsModule,
	FlexLayoutModule,
	MatButtonModule,
	MatListModule,
	MatCheckboxModule,
	MatDividerModule,
	MatIconModule,
	MatMenuModule,
	MatToolbarModule,
	MatSidenavModule,
	MatFormFieldModule,
	MatSelectModule,
	MatCardModule,
	MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
