import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '@login/components/login-dialog/login-dialog.component';
import { RegisterNewUserComponent } from '@login/components/register-new-user/register-new-user.component';
import { LoginDto } from '@login/models/loginDTO.model';
import { LoginComponent } from '@login/pages/login/login.component';
import { CurrentUser } from '@shared/models/user.model';
import { MsgService } from '@shared/services/msg.service';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.scss',
})
export class MainNavbarComponent {
  isLogged: boolean = false;
  loggedUser: string;

  @Output() userLogged = new EventEmitter<LoginDto>();

  constructor(private creationDialog: MatDialog,
  private msgSvc: MsgService) {}

  login(): void {
    const dialog = this.creationDialog.open(LoginDialogComponent, {
      width: '30%',
      height: '35%',
      autoFocus: false
    });

    dialog.afterClosed().subscribe((res: LoginDto) => {
      if(res !== null)
      {
        this.isLogged = true;
        this.loggedUser = res.userName;
        this.userLogged.emit(res);
      }
    });

  }

  register(): void {
    const dialog = this.creationDialog.open(RegisterNewUserComponent, {
      width: '30%',
      height: '70%',
      autoFocus: false
    });
  }

  logOut(): void {
    this.isLogged = false;
    this.loggedUser = "";
    this.msgSvc.ShowToastSuccess("LOGIN.LOGOUT_SUCCESS");
  }
}
