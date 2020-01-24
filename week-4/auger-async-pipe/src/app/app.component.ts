/*
 *  Title:  app.component.ts
 *  Author: April Auger
 *  Date:   23 January 2020
 *  Description: The root component for the auger-async-pipe app.
 */

import { Component } from '@angular/core';
import { Fruit } from './fruit';
import { Observable } from 'rxjs';
import { FruitService } from './fruit.service';

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
						<a routerLink="#" class="nav-link">Contact</a>
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
				<h2>Fruits</h2>
				<table class="table table-hover table-striped">
					<thead class="tbl-header">
						<tr>
							<td>ID</td>
							<td>Name</td>
							<td>Price Per Pound</td>
							<td>Quantity</td>
						</tr>
					</thead>
					<tbody>
						<tr *ngFor="let fruit of fruits | async">
							<td>{{ fruit.id }}</td>
							<td>{{ fruit.name }}</td>
							<td>{{ fruit.pricePerPound }}</td>
							<td>{{ fruit.quantity }}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
  `,
	styles: [`
		.tbl-header {
			background-color: blue;
			color: white;
		}
  `],
})

export class AppComponent {
	title = 'auger-async-pipe';
	fruits: Observable<Fruit[]>;

	constructor(private fruitService: FruitService) {}

	ngOnInit() {
		this.fruits = this.fruitService.getFruits();
	}
}
