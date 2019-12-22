/*
 *  Title:  app.component.ts
 *  Author: April Auger
 *  Date:   20 December 2019
 *  Description: The root component for the auger-hello-modules app.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This message is from the AppComponent';
}
