/*
 *  Title:  fruit.service.ts
 *  Author: April Auger
 *  Date:   23 January 2020
 *  Description: The fruit service provider for the auger-async-pipe app.
 */

import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { Observable, of } from 'rxjs';

@Injectable()

export class FruitService {

	fruits: Fruit[] = [
		{ id: 1, name: 'Apple', pricePerPound: '2.25', quantity: 4 },
		{ id: 2, name: 'Orange', pricePerPound: '1.50', quantity: 2 },
		{ id: 3, name: 'Banana', pricePerPound: '.95', quantity: 6 },
		{ id: 4, name: 'Grapes', pricePerPound: '3.25', quantity: 1 },
		{ id: 5, name: 'Cherry', pricePerPound: '4.00', quantity: 8 },
	];

	  constructor() { }

	  getFruits(): Observable<Fruit[]> {
		  return of(this.fruits);
	  }
}
