import { Component } from '@angular/core';
import { LoginDto } from '@login/models/loginDTO.model';

@Component({
  selector: 'app-news-main',
  templateUrl: './news-main.component.html',
  styleUrl: './news-main.component.scss'
})
export class NewsMainComponent {

  userLoggedIn: LoginDto = null;

  isUserLogged(event: LoginDto): void {
    this.userLoggedIn = event;
  }

}
