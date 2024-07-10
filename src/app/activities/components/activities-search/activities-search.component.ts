import { ActivitiesModel } from '@activities/models/activities.model';
import { ActivitiesService } from '@activities/services/activities.service';
import { Component, OnInit } from '@angular/core';
import { LoginDto } from '@login/models/loginDTO.model';

@Component({
  selector: 'app-activities-search',
  templateUrl: './activities-search.component.html',
  styleUrl: './activities-search.component.scss'
})
export class ActivitiesSearchComponent implements OnInit{

  userLoggedIn: LoginDto = null;

  isUserLogged(event: LoginDto): void {
    this.userLoggedIn = event;
  }


  activitiesList: ActivitiesModel[] = [];

  constructor(private activitySvc: ActivitiesService){}

  ngOnInit(): void {
    debugger;
      this.activitySvc.GetAllAvailableEvents().subscribe({
        next: (res: ActivitiesModel[]) => {
          this.activitiesList = res;
        }
      })
  }

  enter(activity: ActivitiesModel): void {

  }


}
