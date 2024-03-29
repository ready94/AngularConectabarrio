import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActivitiesService } from './activities/services/activities.service';
import { HomeComponent } from "./home/pages/home/home.component";
import { NewsService } from './news/services/news.service';
import { NewsModel } from './news/models/news.model';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HomeComponent]
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
