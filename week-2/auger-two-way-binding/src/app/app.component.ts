/*
 *  Title:  app.component.ts
 *  Author: April Auger
 *  Date:   9 January 2020
 *  Description: The root component for the auger-two-way-binding app.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
			<div class="container">

				<ul class="navbar-nav">
					<li class="nav-item">
						<a href="/" class="nav-link">Home</a>
					</li>
					<li class="nav-item">
						<a href="/#" class="nav-link">About</a>
					</li>
					<li class="nav-item">
						<a href="/#" class="nav-link">Contact</a>
					</li>
				</ul>
			</div><!-- .container -->
		</nav><!-- .navbar -->
		<br /><br /><br />
		<div class="container-fluid two-way-form">
			<div class="row">
				<div class="col-md-12">
					<h2>Two-Way Binding Example</h2><br />
					<div class="form-group">
						<input class="form-control" type="text" placeholder="Enter your name" [(ngModel)]="name">
						<button class="btn btn-primary form-control" (click)="name=''">Clear Name</button>
					</div>

					<div class="form-group">
						<p class="alert alert-success">Hello and welcome, {{ name }}!</p>
					</div>
				</div>
			</div>
		  `,
  styles: [`
		  	.two-way-form { max-width: 500px; text-align: center }`
		  ]
})

export class AppComponent {
	title = 'auger-two-way-binding';

	// Property
	name:string = "April Auger";

	// Change name method
	changeName() {
		this.name = "Ms. April Auger"
	}
}
