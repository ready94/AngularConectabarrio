import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '@login/services/login.service';
import { LogoutService } from '@login/services/logout.service';
import { TranslateService } from '@ngx-translate/core';
import { ResponseResult } from '@shared/models/response-result.model';
import { AuthService } from '@shared/services/auth.service';
import { MainConfigurationService } from '@shared/services/main-configuration.service';
import { MsgService } from '@shared/services/msg.service';
import { SpinnerService } from '@shared/services/spinner.service';
import { StorageService } from '@shared/services/storage.service';
import { LoginForgotPasswordDialogComponent } from '../login-forgot-password-dialog/login-forgot-password-dialog.component';
import { LoginModel } from '@login/models/login.model';
import { LoginDto } from '@login/models/loginDTO.model';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss',
})
export class LoginDialogComponent implements OnInit {
  formData: FormGroup;
  hide = true;
  disabled = false;
  returnUrl: string;

  constructor(
    private creationDialog: MatDialog,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
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
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

    if (this.authSvc.isLoggedIn()) {
      this.goToReturnUrl();
    } else {
      this.createForm();
    }
  }

  onKeyPressEvent(hide: boolean): void {
    this.hide = hide;
  }

  createForm(): void {
    this.authSvc.removeTokenToLocalStorage();

    this.loginSvc.getClientIPAddress().subscribe({
      next: (res: any) => {
        this.formData = this.formBuilder.group({
          userName: [null, [Validators.required]],
          password: [null, [Validators.required]],
          ip: [res.ip],
        });
        this.spinnerSvc.hide();
      },
      error: (err: string) => {
        this.spinnerSvc.hide();
        this.formData = this.formBuilder.group({
          userName: [null, [Validators.required]],
          password: [null, [Validators.required]],
          ip: [null],
        });
        this.translateSvc.get('LOGIN.ERROR.GETTING_IP').subscribe({
          next: (res: string) => {
            this.msgSvc.ShowToastError(res);
          },
        });
      },
    });
  }

  login(): void {
    if (this.formData.valid) {
      let userData: LoginModel = {
        ip: this.formData.get('ip').value,
        password: this.formData.get('password').value,
        email: '',
        userName: '',
      };

      const user: string = this.formData.get('userName').value;

      if (user.includes('@')) userData.email = user;
      else userData.userName = user;

      this.loginSvc.logIn(userData).subscribe({
        next: (result: ResponseResult<LoginDto>) => {
          this.spinnerSvc.hide();
          const res: LoginDto = result.result;

          if (res !== null) {
            this.authSvc.SetSessionStorageToken(res);
            this.close(result.result);
          }
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

  logOut(): void {
    this.logOutSvc.logOut();
    this.authSvc.LogOut();
  }

  goToReturnUrl(): void {
    this.router.navigate([this.returnUrl]);
  }

  close(value: any | null): void {
    this.dialogRef.close(value);
  }

  forgotPass(): void {
    const dialog = this.creationDialog.open(
      LoginForgotPasswordDialogComponent,
      {
        width: '30%',
        height: '53%',
        autoFocus: false,
        disableClose: true,
      }
    );

    dialog.afterClosed().subscribe({
      next: (res: boolean) => {
        if (res) {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      },
    });
  }
}
