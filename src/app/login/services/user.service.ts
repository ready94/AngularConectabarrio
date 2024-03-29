import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.mode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url: string = `${environment.apiUrl}/User`;

  constructor(private router: Router, private httpClient: HttpClient) {}

  CreateUser(idUser: number, user: UserModel): Observable<boolean> {
    debugger;
    const url = this.url + `/createUser/${idUser}`;
    return this.httpClient.post<boolean>(url, user);
  }

  UpdateUser(idUser: number, user: UserModel): Observable<boolean> {
    debugger;
    const url = this.url + `/updateUser/${idUser}`;
    return this.httpClient.post<boolean>(url, user);
  }

  DeleteUser(idUser: number): Observable<boolean> {
    debugger;
    const url = this.url + `/deleteUser/}`;
    return this.httpClient.post<boolean>(url, idUser);
  }

  GetUserData(idUser: number): Observable<UserModel> {
    debugger;
    const url = this.url + `/getUser/${idUser}`;
    return this.httpClient.get<UserModel>(url);
  }

  GetAllUsers(): Observable<UserModel[]> {
    const url = this.url + `/getAllUsers`;
    return this.httpClient.get<UserModel[]>(url);
  }
}
