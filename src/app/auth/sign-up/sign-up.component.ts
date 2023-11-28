import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  form: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.invalid) return;

    this.userService
      .register(this.form.value)
      .then((response) => {
        console.log(response);
        this.router.navigate(['/login']);
      })
      .catch((error) => console.log(error));
  }
}
