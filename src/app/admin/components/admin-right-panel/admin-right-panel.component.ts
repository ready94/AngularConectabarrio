import { ActivitiesModel } from '@activities/models/activities.model';
import { EnumAdminOptions } from '@admin/enums/admin-options.enum';
import { AdminOptionModel } from '@admin/models/admin-options.model';
import { AdminService } from '@admin/services/admin.service';
import { Component, Input } from '@angular/core';
import { ComplaintModel } from '@complaints/models/complaint.model';
import { NewUserModel } from '@login/models/new-user.model';
import { UserModel } from '@login/models/user.mode';
import { NewsModel } from '@news/models/news.model';

@Component({
  selector: 'app-admin-right-panel',
  templateUrl: './admin-right-panel.component.html',
  styleUrl: './admin-right-panel.component.scss',
})
export class AdminRightPanelComponent {
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

  constructor(private adminSvc: AdminService) {}

  ngOnChanges(): void {
    if (this._optionSelected) {
      this.loadLists(this._optionSelected);
    }
  }

  loadLists(option: AdminOptionModel) {
    switch (option.idOption) {
      case EnumAdminOptions.USERS:
        this.getAllUsers();
        break;
      case EnumAdminOptions.COMPLAINTS:
        this.getAllComplaints();
        break;
      case EnumAdminOptions.EVENTS:
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

  getAllActivities(): void {
    this.adminSvc.GetActivities().subscribe({
      next: (res: ActivitiesModel[]) => {
        this.activities = res;
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
