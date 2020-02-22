/*
 *  Title:  app.component.ts
 *  Author: April Auger
 *  Date:   22 February 2020
 *  Description: The root component for Bob's Computer Repair Shop app.
 */

import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'auger-shop';
	grandTotal = 0.00;

	checkboxOptions = [
		{ service: 'Password Reset', price: 39.99 },
		{ service: 'Spyware Removal', price: 99.99 },
		{ service: 'RAM Upgrade', price: 129.99 },
		{ service: 'Software Installation', price: 49.99 },
		{ service: 'Tune-up', price: 89.99 },
		{ service: 'Keyboard Cleaning', price: 45.00 },
		{ service: 'Disk Clean-up', price: 149.99}
	];

	// Create a form model
	formModel: FormGroup;

	constructor() {
		this.formModel = new FormGroup({
			services: new FormArray([]),
			parts: new FormControl(),
			labor: new FormControl()
		});

		this.addCheckBoxesOptions();
	}

	private addCheckBoxesOptions() {
		this.checkboxOptions.forEach((o, i) => {
			const control = new FormControl(i === 0);
				(this.formModel.controls.services as FormArray).push(control);
		});
	}

	private calculateTotal() {
		// Extract the selected service totals
		let servicesSelected = this.formModel.value.services
								.map((j, i) => (j ? this.checkboxOptions[i].price : null))
								.filter(j => j !== null);

		// Calculate the sum of the selected services
		let serviceTotal = servicesSelected.reduce((a, b) =>	a + b, 0);

		let partsTotal = (this.formModel.controls.parts.value ? this.formModel.controls.parts.value : 0);

		// Calculate the sum of the selected services and parts
		let grandTotal = parseFloat(serviceTotal) + parseFloat(partsTotal);

		// Total services and parts
		this.grandTotal = Math.round(grandTotal * 100) / 100;
	}

	// Function to handle form submission
	onSubmit() {
			console.log(this.formModel.value);
		console.log(this.calculateTotal());

	}
}
