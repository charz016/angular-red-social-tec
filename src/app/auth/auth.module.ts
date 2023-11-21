import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [AuthRoutingModule, CommonModule],
})
export class AuthModule {}
