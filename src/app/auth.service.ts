import { Injectable, EventEmitter } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/Rx';

@Injectable()
export class AuthService {

  private isUserLoggedInVar: boolean;
  isUserLoggedInVarEmitter = new EventEmitter<boolean>();

  constructor(
     private http: Http,
     private router: Router) {

  }

  signup(username: string, email: string, password: string) {
    return this.http.post('http://localhost/api/user',
      {name: username, email: email, password: password},
      {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})});
  }

  signin(email: string, password: string) {
    return this.http.post('http://localhost/api/user/signin',
      {email: email, password: password},
      {headers: new Headers({'X-Requested-With': 'XMLHttpRequest'})})
        .map(response => {
          const user = response.json();
            // Logará com sucesso caso tenha um JWT na reponse.
            if (user && user.token) {
                // Armazena no local storage o usuário atual, mantendo-o entre os refresh das páginas.
                localStorage.setItem('currentUser', JSON.stringify(user));
                //Event emitter para mostrar globalmente que o usuário está logado.
                this.isUserLoggedInVarEmitter.emit(true);
            } else {
                this.isUserLoggedInVarEmitter.emit(false);
            }

            return user;
        });
      
  }

  logout() {
      // Remove o usuário atual do local storage, fazendo que ele se deslogue 
      localStorage.removeItem('currentUser');
  }

  getToken() {
    let currentUser = localStorage.getItem('currentUser');
    return JSON.parse(currentUser).token;
  }

  isLogged() {
    let token = localStorage.getItem('currentUser');
    if(token != null) {
      return true;
     } else {
       return false;
     }
  }
}