/*
 *  Title:  app-component.module.ts
 *  Author: April Auger
 *  Date:   19 December 2019
 *  Description: The root component for the hello-world app.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  message = 'Hello World!';
}
