/**
 * Created by bjayamanna on 6/16/2017.
 */
import { Component, OnInit } from '@angular/core';
import { NgForm  } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

import { AuthenticationService, DialogService } from '../../services/services';

@Component({
  selector: 'app-login',
  templateUrl: '/login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  usernamePlaceholder = "Username*";
  passwordPlaceholder = "Password*";
  error : any = '';
  loggedIn = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {

    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      this.loggedIn = true;
    }

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(f: NgForm) {

    if(!f.valid && !f.value.username){
      this.usernamePlaceholder = 'Username is required';
      return;
    }
    if(!f.valid && !f.value.password){
      this.passwordPlaceholder = 'Password is required';
      return;
    }
    this.loading = true;

    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          this.loggedIn = true;
          this.router.navigate([this.returnUrl]);

        },
        error => {
          this.dialogService
            .confirm('Username or Password Incorrect', 'Please try again.')
            .subscribe(res => this.error = res);
          this.loading = false;
        });
  }

  logOut(){
    // reset login status
    this.authenticationService.logout();
    window.location.href = '/';
  }
}
