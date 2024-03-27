import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActivitiesService } from './activities/services/activities.service';

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

  constructor(private activitySvc: ActivitiesService){

  }

  test(): string[] {

    this.activitySvc.GetSqlTest().subscribe({
      next: (res: string[]) => {
        debugger;
        this.testRes.push(...res);
      }
    })
    return this.testRes;
  }

}
