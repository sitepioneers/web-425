/*
 *  Title:  app-routing.module.ts
 *  Author: April Auger
 *  Date:   9 January 2020
 *  Description: The routing module for the auger-hello-routes app.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [],
  imports: [
	CommonModule,
	RouterModule.forRoot(routes)
  ],
  exports: [
	  RouterModule
  ]
})
export class AppRoutingModule { }
