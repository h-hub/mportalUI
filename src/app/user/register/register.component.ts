import { Component, OnChanges, Input  } from '@angular/core';
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

export class RegisterComponent implements OnChanges {
  userForm: FormGroup;
  @Input() user: User;
  submitted = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertService: AlertService) {
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
              this.alertService.success('Registration successful, Login using Username and Password', true);
              this.loading = false;
          },
          error => {
              //TODO: Log the error information : error
              this.alertService.error("Something went wrong. Please retry");
              this.loading = false;
          });
    this.ngOnChanges();
  }

  prepareSaveUser(): User {
    const formModel = this.userForm.value;

    const saveUser: User = {
      id: null,
      username: formModel.username as string,
      password: formModel.passwords.password as string,
      passwordRepeat: formModel.passwords.passwordRepeat as string,
      email: formModel.emails.email as string,
      emailRepeat: formModel.emails.emailRepeat as string
    };
    return saveUser;
  }

  ngOnChanges() {
    this.userForm.reset();
  }
}
