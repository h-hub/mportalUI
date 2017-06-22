import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService, UserService } from '../../services/services';
import { User } from '../../models/user';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
  userForm: FormGroup;
  user = User;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({ // <-- the parent FormGroup
      username: ['', Validators.required ],
      password: '',
      passwordRepeate: '',
      email: '',
      emailRepeate: ''
    });
  }

  onSubmit(){
      
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