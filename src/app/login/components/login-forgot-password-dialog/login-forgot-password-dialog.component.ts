import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotPassword } from '@login/models/forgot-password.model';
import { LoginService } from '@login/services/login.service';
import { LogoutService } from '@login/services/logout.service';
import { TranslateService } from '@ngx-translate/core';
import { ResponseResult } from '@shared/models/response-result.model';
import { AuthService } from '@shared/services/auth.service';
import { MainConfigurationService } from '@shared/services/main-configuration.service';
import { MsgService } from '@shared/services/msg.service';
import { SpinnerService } from '@shared/services/spinner.service';
import { StorageService } from '@shared/services/storage.service';

@Component({
  selector: 'app-login-forgot-password-dialog',
  templateUrl: './login-forgot-password-dialog.component.html',
  styleUrl: './login-forgot-password-dialog.component.scss',
})
export class LoginForgotPasswordDialogComponent {
  formData: FormGroup;
  hide = true;
  disabled = false;
  returnUrl: string;
  strongPasswordRegx: RegExp =
    /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

  constructor(
    private creationDialog: MatDialog,
    private dialogRef: MatDialogRef<LoginForgotPasswordDialogComponent>,
    private formBuilder: UntypedFormBuilder,
    private msgSvc: MsgService,
    private router: Router,
    private route: ActivatedRoute,
    private spinnerSvc: SpinnerService,
    private storageSvc: StorageService,
    private authSvc: AuthService,
    private loginSvc: LoginService,
    private logOutSvc: LogoutService,
    private translateSvc: TranslateService,
    private mainConfigSvc: MainConfigurationService
  ) {}

  ngOnInit(): void {
    this.spinnerSvc.show();
    this.createForm();
  }

  onKeyPressEvent(hide: boolean): void {
    this.hide = hide;
  }

  createForm(): void {
    this.formData = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [
        null,
        [Validators.required, Validators.pattern(this.strongPasswordRegx)],
      ],
      repeatPassword: [null, [Validators.required]],
      email: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
    });
    this.spinnerSvc.hide();
  }

  update(): void {
    if (this.formData.valid) {
      const pass: string = this.formData.get('password').value;
      const passRep: string = this.formData.get('repeatPassword').value;

      if (pass === passRep) {
        const forgotPass: ForgotPassword = {
          email: this.formData.get('email').value,
          username: this.formData.get('userName').value,
          newPassword: pass,
        };

        this.loginSvc.changePassword(forgotPass).subscribe({
          next: (result: ResponseResult<boolean>) => {
            this.spinnerSvc.hide();
            if (result.result !== null) this.close(result.result);
          },
          error: (error: string) => {
            this.spinnerSvc.hide();
            this.translateSvc.get('ERROR.ERROR').subscribe({
              next: (res: string) => {
                this.msgSvc.showAlertError(`${res}`);
              },
            });
          },
        });
      }
    }
  }

  goToReturnUrl(): void {
    this.router.navigate([this.returnUrl]);
  }

  close(value: any | null): void {
    this.dialogRef.close(value);
  }
}
