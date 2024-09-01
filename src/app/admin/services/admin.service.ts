import { ActivitiesModel } from '@activities/models/activities.model';
import { AdminOptionModel } from '@admin/models/admin-options.model';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComplaintModel } from '@complaints/models/complaint.model';
import { NewUserModel } from '@login/models/new-user.model';
import { UserModel } from '@login/models/user.model';
import { NewsModel } from '@news/models/news.model';
import { ResponseResult } from '@shared/models/response-result.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url: string = `${environment.apiUrl}/Admin`;

  constructor(private router: Router,
    private httpClient: HttpClient) {}

  GetAdminOptions(): Observable<AdminOptionModel[]> {
    const url = this.url+ `/getAdminOptions`;
    return this.httpClient.get<AdminOptionModel[]>(url);
  }
  
  GetAllUsers(): Observable<UserModel[]>{
    const url = this.url + `/getAllUsers`;
    return this.httpClient.get<UserModel[]>(url);
  }

  UpdateUser(userModel: UserModel): Observable<boolean>{
    const url = this.url + `/updateUser`;
    return this.httpClient.post<boolean>(url, userModel);
  }

  DeleteUser(userModel: UserModel): Observable<boolean>{
    const url = this.url + `/deleteUser`;
    return this.httpClient.post<boolean>(url, userModel);
  }

  CreateUser(user: NewUserModel, idAdmin: number): Observable<ResponseResult<boolean>> {
    const url = this.url + `/createUser/${idAdmin}`;
    return this.httpClient.get<ResponseResult<boolean>>(url);
  }

  BlockUser(userModel: UserModel): Observable<boolean> {
    const url = this.url + `/blockUser`;
    return this.httpClient.post<boolean>(url, userModel);
  }

  UnblockUser(userModel: UserModel): Observable<boolean> {
    const url = this.url + `/unblockUser`;
    return this.httpClient.post<boolean>(url, userModel);
  }

  GetNews(): Observable<NewsModel[]> {
    const url = this.url + `/getAllNews`;
    return this.httpClient.get<NewsModel[]>(url);
  }

  UpdateNew(newUpdate: NewsModel): Observable<boolean>{
    const url = this.url + `/updateNew`;
    return this.httpClient.post<boolean>(url, newUpdate);
  } 

  DeleteNew(deleteNew: NewsModel): Observable<boolean> {
    const url = this.url + `/deleteNew`;
    return this.httpClient.post<boolean>(url, deleteNew);
  }

  CreateNew(createNew: NewsModel): Observable<boolean> {
    const url = this.url + `/createNew`;
    return this.httpClient.post<boolean>(url, createNew);
  }

  GetActivities(): Observable<ActivitiesModel[]> {
    const url = this.url + `/getAllActivities`;
    return this.httpClient.get<ActivitiesModel[]>(url);
  }

  UpdateActivity(updateActivity: ActivitiesModel): Observable<boolean> {
    const url = this.url + `/updateActivity`;
    return this.httpClient.post<boolean>(url, updateActivity);
  }

  DeleteActivity(deleteActivity: ActivitiesModel): Observable<boolean> {
    const url = this.url + `/deleteActivity`;
    return this.httpClient.post<boolean>(url, deleteActivity);
  }

  CreateActivity(createActivity: ActivitiesModel): Observable<boolean> {
    const url = this.url + `/createActivity`;
    return this.httpClient.post<boolean>(url, createActivity);
  }

  GetComplaints(): Observable<ComplaintModel[]> {
    const url = this.url + `/getAllComplaints`;
    return this.httpClient.get<ComplaintModel[]>(url);
  }

  UpdateComplaint(complaint: ComplaintModel): Observable<boolean> {
    const url = this.url + `/updateComplaint`;
    return this.httpClient.post<boolean>(url, complaint);
  }

  DeleteComplaint(complaint: ComplaintModel): Observable<boolean> {
    const url = this.url + `/deleteComplaint`;
    return this.httpClient.post<boolean>(url, complaint);
  }

  CreateComplaint(complaint: ComplaintModel): Observable<boolean> {
    const url = this.url + `/createComplaint`;
    return this.httpClient.post<boolean>(url, complaint);
  }

}
