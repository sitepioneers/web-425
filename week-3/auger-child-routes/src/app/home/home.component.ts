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
		.container { margin-top: 20px; }
	    h1 { color: #005bbb; font-weight: normal }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
