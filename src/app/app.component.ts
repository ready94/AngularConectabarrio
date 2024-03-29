import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ActivitiesService } from './activities/services/activities.service';
import { HomeComponent } from "./home/pages/home/home.component";
import { NewsService } from './news/services/news.service';
import { NewsModel } from './news/models/news.model';
import { MainNavbarComponent } from "./shared/components/main-navbar/main-navbar.component";
import { MenuLateralComponent } from "./shared/components/menu-lateral/menu-lateral.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HomeComponent, MainNavbarComponent, MenuLateralComponent]
})
export class AppComponent {
  title = 'ConectaBarrio';

  testRes: string[] = [];

  constructor(
    private activitySvc: ActivitiesService,
    private newsSvc: NewsService){

  }

  test(): void{}

}
