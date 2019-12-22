/*
 *  Title:  shipping.component.ts
 *  Author: April Auger
 *  Date:   20 December 2019
 *  Description: The shipping component specs for the auger-hello-modules app.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  template: `
    <p>
      This message is from the Shipping Component
    </p>
  `,
  styles: []
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
