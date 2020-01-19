import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  	<div class="container">
		<div class="row">
			<h1>Welcome to the home page!</h1>
		</div>
	</div>
  `,
  styles: [`
   	h1 { color: Orange; font-weight: normal }
	 .container { margin-top: 20px; }

  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
