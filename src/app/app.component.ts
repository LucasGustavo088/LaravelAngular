import { Component } from '@angular/core';

import { AuthService } from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

	constructor() {

	}

	auth() {
		let token = localStorage.getItem('token');

		if(token != '') {
			return true;
 		} else {
 			return false;
 		}
	}
}
