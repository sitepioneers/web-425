/*
 *  Title:  app-routing.module.ts
 *  Author: April Auger
 *  Date:   19 December 2019
 *  Description: The routing module for the hello-world app.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
