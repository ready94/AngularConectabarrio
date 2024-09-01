import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { NewUserModel } from '@login/models/new-user.model';
import { ResponseResult } from '../../shared/models/response-result.model';
import { UserRolesDTO } from '@login/models/user-roles-dto.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = `${environment.apiUrl}/User`;

  constructor(private router: Router, private httpClient: HttpClient) {}

  CreateUser(user: NewUserModel): Observable<ResponseResult<boolean>> {
    const url = this.url + `/createUser`;
    return this.httpClient.post<ResponseResult<boolean>>(url, user);
  }

  UpdateUser(idUser: number, user: UserModel): Observable<boolean> {
    const url = this.url + `/updateUser/${idUser}`;
    return this.httpClient.post<boolean>(url, user);
  }

  DeleteUser(idUser: number): Observable<boolean> {
    const url = this.url + `/deleteUser`;
    return this.httpClient.post<boolean>(url, idUser);
  }

  GetUserData(idUser: number): Observable<UserModel> {
    const url = this.url + `/getUser/${idUser}`;
    return this.httpClient.get<UserModel>(url);
  }

  GetAllUsers(): Observable<UserModel[]> {
    const url = this.url + `/getAllUsers`;
    return this.httpClient.get<UserModel[]>(url);
  }

  GetUserRoles(): Observable<UserRolesDTO[]> {
    const url = this.url + `/getUserRoles`;
    return this.httpClient.get<UserRolesDTO[]>(url);
  }
}
