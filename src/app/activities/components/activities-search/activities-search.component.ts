import { ActivitiesModel } from '@activities/models/activities.model';
import { EventCategoryModel } from '@activities/models/event-category.model';
import { EventSubcategoryModel } from '@activities/models/event-subcategory.model';
import { EventTypeModel } from '@activities/models/event-type.model';
import { EventDTO } from '@activities/models/eventdto.model';
import { ActivitiesService } from '@activities/services/activities.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LoginDto } from '@login/models/loginDTO.model';
import { AuthService } from '@shared/services/auth.service';
import { ActivitiesNewFormComponent } from '../activities-new-form/activities-new-form.component';
import { TranslateService } from '@ngx-translate/core';
import { MsgService } from '@shared/services/msg.service';

@Component({
  selector: 'app-activities-search',
  templateUrl: './activities-search.component.html',
  styleUrl: './activities-search.component.scss',
})
export class ActivitiesSearchComponent implements OnInit {

  displayedColumns: string[] = ['eventType', 'location', 'category', 'subcategory', 'eventDate', 'actualPerson', 'maxPerson', 'actions'];
  dataSource = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  userLoggedIn: LoginDto = null;

  activitiesList: ActivitiesModel[] = [];
  eventsCompleteList: EventDTO[] = [];

  eventTypes: EventTypeModel[] = [];
  eventCategories: EventCategoryModel[] = [];
  eventSubCategories: EventSubcategoryModel[] = [];

  logged: boolean = false;
  eventsIn: number[] = [];

  constructor(
    private activitySvc: ActivitiesService,
    private authSvc: AuthService,
    private creationDialog: MatDialog,
    private translateSvc: TranslateService,
    private msgSvc: MsgService,
  ) {
    if (this.authSvc.isAuthenticated()) {
      this.logged = true;
      this.userLoggedIn = this.authSvc.GetCurrentUserSession().user;
      this.getEventsIn(this.userLoggedIn.idUser);
    }
  }

  ngOnInit(): void { }

  enter(activity: ActivitiesModel): void {
    this.activitySvc.UpdateNumberOfPlayers(this.userLoggedIn.idUser, activity).subscribe({
      next: (res: boolean) => {
          if(res)
            this.getEventsIn(this.userLoggedIn.idUser);
      }
    })
  }

  exit(activity: ActivitiesModel): void {
    this.activitySvc.RemoveNumberOfPlayers(this.userLoggedIn.idUser, activity).subscribe({
      next: (res: boolean) => {
          if(res){
            this.getEventsIn(this.userLoggedIn.idUser);
          }
      }
    })

  }

  getActivities(): void {
    this.eventsCompleteList = [];
    this.activitySvc.GetAllAvailableEvents().subscribe({
      next: (res: ActivitiesModel[]) => {
        res.forEach((activity: ActivitiesModel) => {
          let newEvent: EventDTO = {
            idEvent: activity.idEvent,
            actualPerson: activity.actualPerson,
            eventSubCategory: this.eventSubCategories.find(
              (x) => x.idEventSubCategory === activity.idEventSubCategory
            ).eventSubCategory,
            idEventSubCategory: activity.idEventSubCategory,
            eventCategory: this.eventCategories.find((x) =>
              this.eventSubCategories.find(
                (y) => y.idEventCategory === x.idEventCategory
              )
            ).eventCategory,
            creationDate: activity.creationDate,
            creationUser: activity.creationUser,
            eventDate: activity.eventDate,
            eventType: this.eventTypes.find(
              (x) => x.idEventType === activity.idEventType
            ).eventType,
            idEventCategory: this.eventCategories.find((x) =>
              this.eventSubCategories.find(
                (y) => y.idEventCategory === x.idEventCategory
              )
            ).idEventCategory,
            idEventType: activity.idEventType,
            location: activity.location,
            maxPerson: activity.maxPerson,
            alreadyIn: this.eventsIn.find(x => x === activity.idEvent) !== undefined,
            isTheCreationUser: this.userLoggedIn.idUser === activity.creationUser
          };

          this.eventsCompleteList.push(newEvent);
        });
        

        this.dataSource = new MatTableDataSource(this.eventsCompleteList)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }

  getEventTypes(): void {
    this.activitySvc.GetEventTypes().subscribe({
      next: (res: EventTypeModel[]) => {
        this.eventTypes = res;
        this.getEventCategories();
      },
    });
  }

  getEventCategories(): void {
    this.activitySvc.GetEventCategories().subscribe({
      next: (res: EventCategoryModel[]) => {
        this.eventCategories = res;
        this.getEventSubCategories();
      },
    });
  }

  getEventSubCategories(): void {
    this.activitySvc.GetEventSubCategories().subscribe({
      next: (res: EventSubcategoryModel[]) => {
        this.eventSubCategories = res;
        this.getActivities();
      },
    });
  }

  getEventsIn(idUser: number): void {
    this.activitySvc.GetAllEventsByUser(idUser).subscribe({
      next: (res: number[]) => {
        this.eventsIn = res;
        this.getEventTypes();
      }
    })
  }

  createEvent(): void {
    const dialog = this.creationDialog.open(ActivitiesNewFormComponent, {
      width: '30%',
      height: '70%',
      autoFocus: false,
      data: { idUser: this.userLoggedIn.idUser },
    });

    dialog.afterClosed().subscribe({
      next: (res: boolean) => {
        this.getActivities();
      },
    });
  }

  updateEvent(activity: ActivitiesModel) {
    const dialog = this.creationDialog.open(ActivitiesNewFormComponent, {
      width: '30%',
      height: '70%',
      autoFocus: false,
      data: { idUser: this.userLoggedIn.idUser, activityToUpdate: activity },
    });

    dialog.afterClosed().subscribe({
      next: (res: boolean) => {
        this.getActivities();
      },
    });
  }

}
