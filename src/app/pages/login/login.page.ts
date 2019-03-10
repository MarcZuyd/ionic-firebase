import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FirebaseAuthService } from '../../services/firebase-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: firebase.User;
  loginForm: FormGroup;
  validationMessages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email address.' },
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 6 characters long.' },
    ]
  };

  constructor(private auth: FirebaseAuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });
    console.log(this.auth.firebaseAuth.auth.currentUser);

  }

  ngOnInit() {
    // this.loginForm.valueChanges.subscribe(console.log);
    console.log(this.auth.firebaseAuth.auth.currentUser);
  }

  login() {
    console.log(this.loginForm.get('email').value.toString(), this.loginForm.get('password').value.toString());
    this.auth.login(this.loginForm.get('email').value.toString(), this.loginForm.get('password').value.toString());
    this.clearForm();
  }

  logOut() {
    this.auth.logOut();
  }

  clearForm() {
    this.loginForm.reset(this.loginForm.value);
    this.loginForm.get('password').setValue('');
    this.loginForm.get('email').setValue('');
  }
}
