import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
  	<div class="container">
		<div class="row">
			<h1>Product Details</h1>
			<div class="product">
				<h2>{{ productName }}</h2>
				<h5>Product ID: {{ productId }}</h5>
				<router-outlet></router-outlet>
				<p><a [routerLink]="['./seller', sellerId]">Seller Information</a></p>
			</div>
		</div>
	</div>
  `,
  styles: [
	  `
	    h1 { color: #005bbb; font-weight: normal }
		.container { margin-top: 20px; }
	 	.product {
			 background-color: #f4f4f4;
			 background: 1px solid #dddddd;
			 padding: 20px;
			 margin-top: 20px;
			 width: 100%;
			 max-width: 400px;
		 }
	  `
  ]
})

export class ProductDetailComponent implements OnInit {
  productId: string;
  productName: string = 'Ray-Ban';
  sellerId = 5678;

  constructor(route: ActivatedRoute) {
	  this.productId = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
