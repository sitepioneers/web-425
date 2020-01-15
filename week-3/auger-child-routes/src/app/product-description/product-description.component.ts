import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  template: `
    <p>
      {{ productDesc }}
    </p>
  `,
  styles: [`
	p { font-style: italic },
  `]
})

export class ProductDescriptionComponent implements OnInit {
	productDesc: string = 'Ray-Ban Original Wayfarer Classics are the most recognizable style in the history of sunglasses.';

	constructor() { }

	ngOnInit() {
	}

}
