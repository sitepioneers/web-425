/*
 *  Title:  app.comoponent.ts
 *  Author: April Auger
 *  Date:   14 Feb 2020
 *  Description: The root component module for the auger-form-validation app.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'auger-form-validation';

  onSubmit(formData) {
	  console.log(formData);
  }
}
