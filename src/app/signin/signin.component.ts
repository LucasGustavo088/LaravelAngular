import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  returnUrl: string;

  signInEvent = new EventEmitter();

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // reset login status
    this.authService.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSignin(form: NgForm) {

    this.authService.signin(form.value.email, form.value.password)
      .subscribe(
        data => {
            if(this.authService.isLogged()) {
              this.signInEvent.emit('teste');
            }

            this.router.navigate([this.returnUrl]);
        },
      );

    alert('Você está logado');
  }
}