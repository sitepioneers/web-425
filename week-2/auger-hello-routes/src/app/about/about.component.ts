import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2>You are viewing the about page.</h2>
			</div>
		</div>
	</div>
  `,
  styles: [`.container {margin-top: 20px;} h2{color:red}`]
})

export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
