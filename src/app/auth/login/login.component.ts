import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private userServ: UserService
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.userServ
      .login(this.form.value)
      .then((response: any) => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .catch((error) => console.log(error));
  }

  get f() {
    return this.form.controls;
  }

  signGo() {
    this.userServ
      .loginWithGoogle()
      .then((response) => {
        console.log(response);
        this.router.navigate(['/home']);
      })
      .catch((error) => console.log(error));
  }
}
