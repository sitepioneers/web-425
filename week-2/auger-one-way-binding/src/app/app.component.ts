/*
 *  Title:  app.component.ts
 *  Author: April Auger
 *  Date:   7 January 2020
 *  Description: The root component for the auger-one-way-binding app.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
		  <h1>{{ name }}</h1>
		  <button (click)="changeName()">Change Name</button>`,
  styles: [`
  		h1 {
			  color: blue;
		  }`]
})
export class AppComponent {
  title = 'auger-one-way-binding';

  // Class property
  name:string = 'April Auger';

  // Change name method
  changeName() {
	this.name = "Ms. April Auger"
  }
}
