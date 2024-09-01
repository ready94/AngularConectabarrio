import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '@login/components/login-dialog/login-dialog.component';
import { RegisterNewUserComponent } from '@login/components/register-new-user/register-new-user.component';
import { LoginDto } from '@login/models/loginDTO.model';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@shared/services/auth.service';
import { MsgService } from '@shared/services/msg.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.scss',
})
export class MainNavbarComponent implements OnInit{
  isLogged: boolean = false;
  userLog: LoginDto;

  constructor(
    private creationDialog: MatDialog,
    private msgSvc: MsgService,
    private authSvc: AuthService,
    private translateSvc: TranslateService
  ) { }

  ngOnInit(): void {
    if (this.authSvc.isAuthenticated()) {
      this.isLogged = true;
      this.userLog = this.authSvc.GetCurrentUserSession().user;
    }
  }

  login(): void {
    const dialog = this.creationDialog.open(LoginDialogComponent, {
      width: '30%',
      height: '35%',
      autoFocus: false,
      disableClose: true,
    });

    dialog.afterClosed().subscribe((res: LoginDto) => {
      if (res !== null) {
        this.isLogged = true;
        this.userLog = res;
        window.location.reload();
      }
    });
  }

  register(): void {
    const dialog = this.creationDialog.open(RegisterNewUserComponent, {
      width: '30%',
      height: '70%',
      autoFocus: false,
      disableClose: true,
    });
  }

  logOut(): void {
    this.isLogged = false;
    this.authSvc.LogOut();
    const msg: string = this.translateSvc.instant('LOGIN.LOGOUT_SUCCESS');
    this.msgSvc.ShowToastSuccess(msg);
    setTimeout(() => {window.location.reload();}, 1500);
    
  }
}
