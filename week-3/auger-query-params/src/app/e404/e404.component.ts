import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
		<div class="container">
			<div class="row">
				<h2>Page Not Found</h2>
				<p>It appears the page you are looking for does not exist.</p>
			</div>
		</div>
  	`,
	styles: [`
		.container {
			margin-top: 20px;
		}
		h2 {
			color: red
		}
  	`]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
