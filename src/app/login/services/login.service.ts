import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = `${environment.apiUrl}/Login`;

  constructor(private router: Router, private httpClient: HttpClient) {}

  Login(idUser: number, user: LoginModel): Observable<boolean> {
    debugger;
    const url = this.url + `/Login/${idUser}`;
    return this.httpClient.post<boolean>(url, user);
  }

  UpdateNew(idUser: number, user: LoginModel): Observable<boolean> {
    debugger;
    const url = this.url + `/updateUser/${idUser}`;
    return this.httpClient.post<boolean>(url, user);
  }

}
