/**
 * Created by bjayamanna on 6/16/2017.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

  private headers = new Headers({ 'Content-Type': 'application/json',
                               'X-Requested-With': 'XMLHttpRequest',
                               'Cache-Control': 'no-cache' 
                            });

  constructor(private http: Http) { }

  login(username: string, password: string) {
    return this.http.post('http://localhost:8080/api/auth/login', JSON.stringify({ username: username, password: password }), {headers: this.headers} )
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        } 
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
