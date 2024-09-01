import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { UserService } from '@login/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { ResponseResult } from '@shared/models/response-result.model';
import { MsgService } from '@shared/services/msg.service';
import { SpinnerService } from '@shared/services/spinner.service';

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
    private formBuilder: UntypedFormBuilder,
    private msgSvc: MsgService,
    private spinnerSvc: SpinnerService,
    private userSvc: UserService,
    private translateSvc: TranslateService,
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
        const msg: string = this.translateSvc.instant('ERROR.PASSWORD_NOT_MATCH');
        this.msgSvc.showAlertWarning(msg);
      } else {
        this.userSvc.CreateUser(this.formData.value).subscribe({
          next: (res: ResponseResult<boolean>) => {
            const msg: string = this.translateSvc.instant(res.msg);
            if (res.success) {
              this.msgSvc.showAlertSuccess(msg);
            } else {
              this.msgSvc.showAlertError(msg);
            }
          },
        });
      }
    }
  }

}
