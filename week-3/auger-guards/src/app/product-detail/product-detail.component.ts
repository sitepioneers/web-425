import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  template: `
  	<div class="container">
		<h1>Product Detail</h1>
		<div class="form-group">
			<form>
				<input class="form-control" placeholder="Enter your name" type="text" [formControl]="name">
			</form>
		</div>
	</div>
  `,
  styles: [`
	    h1 { color: #005bbb; font-weight: normal; margin-bottom: 1.5rem }
		.container { margin-top: 20px; }
	 	.product {
			 background-color: #f4f4f4;
			 background: 1px solid #dddddd;
			 padding: 20px;
			 margin-top: 20px;
			 width: 100%;
			 max-width: 400px;
		 }
	`]
})

export class ProductDetailComponent implements OnInit {

  name: FormControl = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
