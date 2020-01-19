import { Injectable } from "@angular/core";
import { Router, CanActivate } from '@angular/router';

@Injectable()

export class LoginGuard implements CanActivate {
	constructor(private router: Router) {}

	canActivate() {
		let loggedIn = Math.random() < 0.5;

		if(!loggedIn) {
			alert("You are not logged in. You will be redirected to the login page.");
			this.router.navigate(["/login"]);
		}

		return loggedIn;
	}
}