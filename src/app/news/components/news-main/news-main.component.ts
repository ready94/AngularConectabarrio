import { Component } from '@angular/core';
import { LoginDto } from '@login/models/loginDTO.model';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrl: './news-main.component.scss'
})
export class NewsMainComponent {

  userLoggedIn: LoginDto = null;
  logged: boolean = false;

  constructor(private authSvc: AuthService){
    this.isLogged();
  }

  isLogged(): void{
    if (this.authSvc.isAuthenticated()) {
      this.logged = true;
      this.userLoggedIn = this.authSvc.GetCurrentUserSession().user;
    }
  }


}
