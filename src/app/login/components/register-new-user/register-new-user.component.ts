import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NewUserModel } from '@login/models/new-user.model';
import { LoginService } from '@login/services/login.service';
import { LogoutService } from '@login/services/logout.service';
import { UserService } from '@login/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { ResponseResult } from '@shared/models/response-result.model';
import { AuthService } from '@shared/services/auth.service';
import { MainConfigurationService } from '@shared/services/main-configuration.service';
import { MsgService } from '@shared/services/msg.service';
import { SpinnerService } from '@shared/services/spinner.service';
import { StorageService } from '@shared/services/storage.service';

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrl: './register-new-user.component.scss',
})
export class RegisterNewUserComponent {
  formData: FormGroup;
  hide = true;
  disabled = false;
  returnUrl: string;
  strongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
  constructor(
    private creationDialog: MatDialog,
    private formBuilder: UntypedFormBuilder,
    private msgSvc: MsgService,
    private router: Router,
    private route: ActivatedRoute,
    private spinnerSvc: SpinnerService,
    private storageSvc: StorageService,
    private authSvc: AuthService,
    private userSvc: UserService,
    private translateSvc: TranslateService,
    private mainConfigSvc: MainConfigurationService
  ) {}

  ngOnInit(): void {
    this.spinnerSvc.show();
    this.createForm();
  }

  createForm(): void {
    this.formData = this.formBuilder.group({
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      userName: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.pattern(this.strongPasswordRegx)]],
      repeatPassword: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    });
    this.spinnerSvc.hide();
  }

  register(): void {
    if (this.formData.valid) {
      const password = this.formData.get('password').value;
      const repeatPassword = this.formData.get('repeatPassword').value;

      if (password !== repeatPassword) {
        this.msgSvc.showAlertWarning('ERROR.PASSWORD_NOT_MATCH');
      } else {
        this.userSvc.CreateUser(this.formData.value).subscribe({
          next: (res: ResponseResult<boolean>) => {
            if (res.success) {
              this.msgSvc.showAlertSuccess(res.msg);
            } else {
              this.msgSvc.showAlertError(res.msg);
            }
          },
        });
      }
    }
  }

}
