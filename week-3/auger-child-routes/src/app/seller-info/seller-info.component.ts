import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
    <p>
      Seller Name: April Auger<br />
	  Seller ID: {{ sellerId }}
    </p>
  `,
  styles: [
	  `
	 	:host { background: green; }
	  `
  ]
})

export class SellerInfoComponent implements OnInit {
  sellerId: string;

  constructor(route: ActivatedRoute) {
	  this.sellerId = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
