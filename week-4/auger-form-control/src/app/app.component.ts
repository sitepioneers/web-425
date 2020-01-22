/*
 *  Title:  app.component.ts
 *  Author: April Auger
 *  Date:   22 January 2020
 *  Description: The root component for the auger-form-control app.
 */

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
			<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
				<div class="container">
					<div class="row">
						<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
							<ul class="navbar-nav">
								<li class="nav-item">
									<a routerLink="#" class="nav-link">Home</a>
								</li>
								<li class="nav-item">
									<a routerLink="#" class="nav-link">About</a>
								</li>
								<li class="nav-item">
									<a routerLink="#" class="nav-link">Contact Us</a>
								</li>
							</ul>
						</nav>
					</div>
				</div><!-- .container -->
			</nav><!-- .navbar -->
			<br /><br />
			<div class="container">
				<div class="row">
					<div class="col">
						<h2>Handling Form Events with Observables</h2>
						<br />
						<form class="form">
							<div class="form-group">
								<label for="txtStockPrice">Stock Price: </label>
								<input type="text" class="form-control" id="txtStockPrice" placeholder="Enter stock price..." [formControl]="searchInput">
							</div>
						</form>
					</div>
				</div>
			</div>
		<br /><br />
		<div class="container">
			<div class="row">
				<div class="col">
					<h4 class="txt-bold">Results: {{ convertedStockPrice }}</h4>
				</div>
			</div>
		</div>
  `,
  styles: [`
		h4.txt-bold {
			font-weight: bold;
			border: 1px solid mediumblue;
			background: lightblue;
			padding: .75rem;
			color: mediumblue;
		}
		.form, h4 {
			margin: auto;
			max-width: 450px;
		}
  `]
})

export class AppComponent {
  title = 'auger-form-control';
  searchInput: FormControl = new FormControl();
  convertedStockPrice:string;

  constructor() {
	  this.searchInput.valueChanges.pipe(debounceTime(500))
	  	.subscribe(stock => this.getStockQuoteFromServer(stock));
  }

  getStockQuoteFromServer(stock:string) {
	  this.convertedStockPrice = `The price of ${stock} is ${(100 * Math.random()).toFixed(4)}`;
  }
}
