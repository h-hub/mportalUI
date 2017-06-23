import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { AlertService, UserService } from '../../services/services';
import { validateEmail } from '../../utils/email-validator';
import { validatePassword } from '../../utils/password-validator';
import { User } from '../../models/user';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
  styleUrls: ['/register.component.css']
})

export class RegisterComponent implements OnInit{
  userForm: FormGroup;
  user = User;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({ // <-- the parent FormGroup
      username: ['', [Validators.required, Validators.minLength(4)] ],
      passwords: this.fb.group({
        password: ['', Validators.required],
        passwordRepeat: ['', Validators.required]
      }, {validator: validatePassword}),
      email: [ '', [Validators.required, validateEmail] ],
      emailRepeat: ''
    });
  }

  onSubmit(){
    this.submitted = true;
  }
}


// export class RegisterComponent {
//     model: any = {};
//     loading = false;

//     constructor(
//         private router: Router,
//         private userService: UserService,
//         private alertService: AlertService) { }

//     register() {
//         this.loading = true;
//         this.userService.create(this.model)
//             .subscribe(
//                 data => {
//                     // set success message and pass true paramater to persist the message after redirecting to the login page
//                     this.alertService.success('Registration successful', true);
//                     this.router.navigate(['/login']);
//                 },
//                 error => {
//                     this.alertService.error(error);
//                     this.loading = false;
//                 });
//     }
// }
