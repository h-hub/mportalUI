/**
 * Created by bjayamanna on 6/16/2017.
 */
import { Component, OnInit } from '@angular/core';
import { NgForm  } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

import { AlertService, AuthenticationService, DialogService } from '../../services/services';

@Component({
  selector: 'app-login',
  templateUrl: '/login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  usernamePlaceholder = "";
  passwordPlaceholder = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

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
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.dialogService
            .confirm('Confirm Dialog', 'Are you sure you want to do this?')
            .subscribe(res => error = res);
          this.loading = false;
        });
  }
}
