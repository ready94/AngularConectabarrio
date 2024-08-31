import { Component } from '@angular/core';
import { LoginDto } from '@login/models/loginDTO.model';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-complaints-main',
  templateUrl: './complaints-main.component.html',
  styleUrl: './complaints-main.component.scss',
})
export class ComplaintsMainComponent {
  userLoggedIn: LoginDto = null;
  logged: boolean = false;

  constructor(private authSvc: AuthService) {
    if (this.authSvc.isAuthenticated()) {
      this.logged = true;
      this.userLoggedIn = this.authSvc.GetCurrentUserSession().user;
    }
  }


}
