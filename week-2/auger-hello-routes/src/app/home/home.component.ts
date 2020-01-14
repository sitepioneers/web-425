import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2>You are viewing the home page.</h2>
			</div>
		</div>
	</div>
  `,
  styles: [`.container {margin-top: 20px;} h2{color:darkorange}`]
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
