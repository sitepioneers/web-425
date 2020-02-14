/*
 *  Title:  app.comoponent.ts
 *  Author: April Auger
 *  Date:   14 Feb 2020
 *  Description: The app component module for the auger-template-forms app.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'auger-template-forms';

  onSubmit(formData) {
	  console.log(formData);
  }
}
