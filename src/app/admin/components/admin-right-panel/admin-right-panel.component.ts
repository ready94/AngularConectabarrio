import { EnumTournamentType } from '@activities/enums/tournament-type.enum';
import { ActivitiesModel } from '@activities/models/activities.model';
import { EventCategoryModel } from '@activities/models/event-category.model';
import { EventSubcategoryModel } from '@activities/models/event-subcategory.model';
import { EventTypeModel } from '@activities/models/event-type.model';
import { ActivitiesService } from '@activities/services/activities.service';
import { EnumAdminOptions } from '@admin/enums/admin-options.enum';
import { AdminOptionModel } from '@admin/models/admin-options.model';
import { AdminService } from '@admin/services/admin.service';
import { Component, Input, OnChanges } from '@angular/core';
import { ComplaintModel } from '@complaints/models/complaint.model';
import { NewUserModel } from '@login/models/new-user.model';
import { UserModel } from '@login/models/user.model';
import { EnumNewsCategory } from '@news/enums/news-category.enum';
import { NewsModel } from '@news/models/news.model';

@Component({
  selector: 'app-admin-right-panel',
  templateUrl: './admin-right-panel.component.html',
  styleUrl: './admin-right-panel.component.scss',
})
export class AdminRightPanelComponent implements OnChanges{
  private _optionSelected: AdminOptionModel;

  @Input() set optionSelected(option: AdminOptionModel) {
    if (option) this._optionSelected = option;
  }

  get optionSelected(): AdminOptionModel {
    return this._optionSelected;
  }

  enumAdminOptions = EnumAdminOptions;
  users: UserModel[] = [];
  activities: ActivitiesModel[] = [];
  news: NewsModel[] = [];
  complaints: ComplaintModel[] = [];
  eventType: EventTypeModel[] = [];
  eventCategory: EventCategoryModel[] = [];
  eventSubcategory: EventSubcategoryModel[] = [];

  constructor(
    private adminSvc: AdminService,
    private activitySvc: ActivitiesService
  ) {}

  ngOnChanges(): void {
    if (this._optionSelected) {
      this.loadLists(this._optionSelected);
    }
  }

  loadLists(option: AdminOptionModel) {
    debugger
    switch (option.idOption) {
      case EnumAdminOptions.USERS:
        this.getAllUsers();
        break;
      case EnumAdminOptions.COMPLAINTS:
        this.getAllComplaints();
        break;
      case EnumAdminOptions.EVENTS:
        this.getActivityCategories();
        this.getActivitySubcategories();
        this.getAllActivities();
        break;
      case EnumAdminOptions.NEWS:
        this.getAllNews();
        break;
    }
  }

    
  getAllUsers(): void {
    this.adminSvc.GetAllUsers().subscribe({
      next: (res: UserModel[]) => {
        debugger;
        this.users = res;
      },
      error: (err: string) => {},
    });
  }

  updateUser(user: UserModel): void {

  }

  deleteUser(user: UserModel): void {

  }

  createUser(): void {

  }

  blockUser(user: UserModel): void{

  }

  unblock(user: UserModel): void {

  }

  getAllNews(): void {
    this.adminSvc.GetNews().subscribe({
      next: (res: NewsModel[]) => {
        res.forEach((result) => {
          switch(result.idCategory){
            case EnumNewsCategory.INFO:
              result.category = "NEWS.CATEGORY.INFO";
              break;
            case EnumNewsCategory.SOCIAL: 
              result.category = "NEWS.CATEGORY.SOCIAL";
              break;
          }
        })
        this.news = res;
      },
      error: (err: string) => {},
    });
  }

  createNew(): void {

  }

  updateNew(updateNew: NewsModel): void {

  }

  deleteNew(deleteNew: NewsModel): void {

  }

  getActivityCategories(): void {
    this.activitySvc.GetEventCategories().subscribe({
      next: (res: EventCategoryModel[]) => {
        this.eventCategory = res;
      }
    })
  }

  getActivitySubcategories(): void {
    this.activitySvc.GetEventSubCategories().subscribe({
      next: (res: EventSubcategoryModel[]) => {
        this.eventSubcategory = res;
      }
    })
  }

  getAllActivities(): void {
    this.adminSvc.GetActivities().subscribe({
      next: (res: ActivitiesModel[]) => {
        res.forEach((act) => {
          switch(act.idEventType){
            case EnumTournamentType.AMISTOSO:
              act.eventType = "ACTIVITY.ACTTIVITY_TYPE.FRIENDLY";
              break;
            case EnumTournamentType.TORNEO:
              act.eventType = "ACTIVITY.ACTTIVITY_TYPE.TOURNAMENT";
              break;  
          }
          debugger;

          if(this.eventSubcategory){
            act.eventSubcategory = this.eventSubcategory.find(ev => ev.idEventSubCategory == act.idEventSubCategory).eventSubCategory
            let idCategory = this.eventSubcategory.find(ev => ev.idEventSubCategory == act.idEventSubCategory).idEventCategory;
            
            if(this.eventCategory){
              
              act.eventCategory = this.eventCategory.find(ev => ev.idEventCategory == idCategory).eventCategory;
            }
          }



        })
        this.activities = res;
        debugger
      },
      error: (err: string) => {},
    });
  }

  createActivity(): void {

  }

  updateActivity(activity: ActivitiesModel): void {

  }

  deleteActivity(activity: ActivitiesModel): void {

  }

  getAllComplaints(): void {
    this.adminSvc.GetComplaints().subscribe({
      next: (res: ComplaintModel[]) => {
        this.complaints = res;
        debugger
      },
      error: (err: string) => {},
    });
  }

  createComplaint(): void {

  }

  updateComplaint(complaint: ComplaintModel): void {

  }

  deleteComplaint(complaint: ComplaintModel): void {

  }

}
