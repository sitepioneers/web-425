/*
 *  Title:  app.component.ts
 *  Author: April Auger
 *  Date:   6 Feb 2020
 *  Description: The root component for the auger-input-properties app.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Input Properties Example';

  stock: string;
  readonly numberOfShares = 100;

  onChangeEvent({ target }): void {
	  this.stock = target.value
  }
}
