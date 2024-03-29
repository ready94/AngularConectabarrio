import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActivitiesService } from './activities/services/activities.service';
import { NewsService } from './news/services/news.service';
import { NewsModel } from './news/models/news.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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
