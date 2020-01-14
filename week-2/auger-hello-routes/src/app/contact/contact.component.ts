import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2>You are viewing the contact page.</h2>
			</div>
		</div>
	</div>
  `,
  styles: [`.container {margin-top: 20px;} h2{color:steelblue}`]
})

export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
