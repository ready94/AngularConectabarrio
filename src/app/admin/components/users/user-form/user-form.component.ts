import { Component, Inject } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRolesDTO } from '@login/models/user-roles-dto.model';
import { UserModel } from '@login/models/user.model';
import { UserService } from '@login/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { ResponseResult } from '@shared/models/response-result.model';
import { AuthService } from '@shared/services/auth.service';
import { MainConfigurationService } from '@shared/services/main-configuration.service';
import { MsgService } from '@shared/services/msg.service';
import { SpinnerService } from '@shared/services/spinner.service';
import { StorageService } from '@shared/services/storage.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class AdminUserFormComponent {
  formData: FormGroup;
  hide = true;
  disabled = false;
  returnUrl: string;
  strongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

  userUpdate: UserModel;
  userRoles: UserRolesDTO[];
  idAdmin: number;

  constructor(
    private translateSvc: TranslateService,
    private formBuilder: UntypedFormBuilder,
    private msgSvc: MsgService,
    private spinnerSvc: SpinnerService,
    private userSvc: UserService,
    private dialogRef: MatDialogRef<AdminUserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    if(data.user)
      this.userUpdate = data.user;
    
    if(data.idAdmin)
      this.idAdmin = data.idAdmin;
  }

  ngOnInit(): void {
    this.spinnerSvc.show();
    this.getUserRoles();
    this.createForm();
    if(this.userUpdate)
      this.formData.patchValue(this.userUpdate);
  }

  createForm(): void {
    this.formData = this.formBuilder.group({
      name: [null, [Validators.required]],
      surname: [null, [Validators.required]],
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.pattern(this.strongPasswordRegx)]],
      repeatPassword: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      idRole: [null]
    });
    this.spinnerSvc.hide();
  }

  register(): void {
    if (this.formData.valid) {
      debugger
      const password = this.formData.get('password').value;
      const repeatPassword = this.formData.get('repeatPassword').value;

      if (password !== repeatPassword) {
        this.msgSvc.showAlertWarning('ERROR.PASSWORD_NOT_MATCH');
      } else {
        if(this.userUpdate){
          this.userSvc.UpdateUser(this.idAdmin, this.formData.value, this.userUpdate.idUser).subscribe({
            next: (res: boolean) => {
              if (res) {
                const msg: string = this.translateSvc.instant("SUCCESS.UPDATE");
                this.msgSvc.showAlertSuccess(msg);
                this.dialogRef.close(true);
              } else {
                const msg: string = this.translateSvc.instant("ERROR.USER_UPDATE");
                this.msgSvc.showAlertError(msg);
              }
            },
          });
        }
        else 
        {
          this.userSvc.CreateUser(this.formData.value).subscribe({
            next: (res: ResponseResult<boolean>) => {
              const msg: string = this.translateSvc.instant(res.msg);
              if (res.success) {                
                this.msgSvc.showAlertSuccess(msg);
                this.dialogRef.close(true);
              } else {
                this.msgSvc.showAlertError(msg);
              }
            },
          });
        }
      }
    }
  }

  getUserRoles(): void {
    this.userSvc.GetUserRoles().subscribe({
      next: (res: UserRolesDTO[]) => {
        this.userRoles = res;
      }
    })
  }

}
