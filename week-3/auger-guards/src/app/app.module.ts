import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginGuard } from './login.guard';
import { UnsavedChangesGuard } from './unsaved-changes.guard'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
	ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	FormsModule,
	ReactiveFormsModule,
  ],
	providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, LoginGuard, UnsavedChangesGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
