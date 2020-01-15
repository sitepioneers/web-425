/*
 *  Title:  app.component.ts
 *  Author: April Auger
 *  Date:   15 January 2020
 *  Description: The root component for the auger-child-routes app.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'auger-child-routes';
  productId = 1234;
}
