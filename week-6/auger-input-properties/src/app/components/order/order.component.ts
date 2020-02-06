/*
 *  Title:  order.component.ts
 *  Author: April Auger
 *  Date:   6 Feb 2020
 *  Description: The order component for the auger-input-properties app.
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
    <div class="box" *ngIf="!!stockSymbol">Buying {{ quantity }} shares of {{ stockSymbol }}</div>
  `,
  styles: [`
	:host { background: cyan; }
	.box { border: 1px solid #000; margin-top: 1.5rem; background-color: #f6f6f6; padding: 1rem }
  `]
})
export class OrderComponent implements OnInit {
	@Input() quantity: number;
	@Input() stockSymbol: string;

	constructor() { }

	ngOnInit() {
	}

}
