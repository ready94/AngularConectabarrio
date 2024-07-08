import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { LoginForgotPasswordDialogComponent } from './components/login-forgot-password-dialog/login-forgot-password-dialog.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RegisterNewUserComponent } from './components/register-new-user/register-new-user.component';

@NgModule({
  declarations: [
    LoginDialogComponent,
    LoginForgotPasswordDialogComponent,
    LoginComponent,
    RegisterNewUserComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
