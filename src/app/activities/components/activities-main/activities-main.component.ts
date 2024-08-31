import { Component } from '@angular/core';
import { LoginDto } from '@login/models/loginDTO.model';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-activities-main',
  templateUrl: './activities-main.component.html',
  styleUrl: './activities-main.component.scss'
})
export class ActivitiesMainComponent {

  userLoggedIn: LoginDto = null;
  logged: boolean = false;

  constructor(private authSvc: AuthService){
    this.isLogged();
  }

  isLogged(): void{
    this.logged = this.authSvc.isAuthenticated();
  }

}
