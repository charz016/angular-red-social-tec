import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  isCode: boolean = true;
  isSendCode!: boolean;
  isChangePass!: boolean;

  sendCode() {
    this.isSendCode = true;
    this.isCode = false;
    this.isChangePass = false;
  }

  checkCode() {
    this.isChangePass = true;
    this.isSendCode = false;
    this.isCode = false;
  }

  changePass() {
    
  }
}
