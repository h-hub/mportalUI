/**
 * Created by bjayamanna on 6/21/2017.
 */
import { Injectable } from '@angular/core';

import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class SessionService {

  getUser(){
    let jwtHelper: JwtHelper = new JwtHelper();
    var token = JSON.parse(localStorage.getItem('currentUser'));
    return JSON.stringify({
      "name" : jwtHelper.decodeToken(token.token).sub
    });
  }
}
