import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  template: `
  	<div class="container">
		<h1 class="home">Please login</h1>
		<form>
			<div class="form-group">
				<input class="form-control" placeholder="Enter your login" type="text" [formControl]="login">
			</div>

			<div class="form-group">
				<input class="form-control" placeholder="Enter your password" type="text" [formControl]="password">
			</div>
		</form>
	</div>
  `,
  styles: [`
  	h1 { color: green; font-weight: normal; margin-bottom: 1.5rem }
	 .container { margin-top: 20px; }

	`]
})

export class LoginComponent implements OnInit {

	login: FormControl = new FormControl();
	password: FormControl = new FormControl();

  	constructor() { }

  	ngOnInit() {
  	}

}
