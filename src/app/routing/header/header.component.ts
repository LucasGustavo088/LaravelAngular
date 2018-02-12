import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "../../auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  	this.verificarUsuarioLogado();
  }

  ngOnInit() {
    this.authService.isUserLoggedInVarEmitter.subscribe(
      isUserLoggedInVarEmitter => this.isLogged = isUserLoggedInVarEmitter
    );
  }

  verificarUsuarioLogado() {
  	this.isLogged = this.authService.isLogged();
  	return this.isLogged;
  }

  logout() {
  	// this.authService.logout();
  	this.isLogged = false;
  }
}
