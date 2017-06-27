import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService, UserService } from '../../services/services';
import { validateEmail } from '../../utils/email-validator';
import { isEqual } from '../../utils/isequal-validator';
import { User } from '../../models/user';

@Component({
  moduleId: module.id,
  templateUrl: 'register.component.html',
  styleUrls: ['/register.component.css']
})

export class RegisterComponent implements OnInit{
  userForm: FormGroup;
  user: User;
  submitted = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)] ],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(8)] ],
        passwordRepeat: ['', [Validators.required, Validators.minLength(8)] ]
      }, {validator: isEqual}),
      emails: this.fb.group({
        email: [ '', [Validators.required, validateEmail] ],
        emailRepeat: [ '', [Validators.required, validateEmail] ]
      }, {validator: isEqual})
    });
  }

  onSubmit(){
    this.submitted = true;
    this.user = this.prepareSaveUser();
    this.loading = true;
    this.userService.create(this.user)
      .subscribe(
          data => {
              // set success message and pass true paramater to persist the message after redirecting to the login page
              this.alertService.success('Registration successful', true);
              this.router.navigate(['/']);
          },
          error => {
              this.alertService.error(error);
              this.loading = false;
          });
  }

  prepareSaveUser(): User {
    const formModel = this.userForm.value;

    const saveUser: User = {
      id: null,
      username: formModel.username as string,
      password: formModel.password as string,
      email: formModel.email as string
    };
    return saveUser;
  }
}
