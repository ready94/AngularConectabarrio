import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { ResponseResult } from '@shared/models/response-result.model';
import { LoginDto } from '@login/models/loginDTO.model';
import { ForgotPassword } from '@login/models/forgot-password.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = `${environment.apiUrl}/Login`;

  constructor(private router: Router, private httpClient: HttpClient) {}

  logIn(user: LoginModel): Observable<ResponseResult<LoginDto>> {
    const url = this.url+ '/login';
    return this.httpClient.post<ResponseResult<LoginDto>>(url, user);
  }

  changePassword(forgotPass: ForgotPassword): Observable<ResponseResult<boolean>> {
    const url = this.url+ '/changePassword';
    return this.httpClient.post<ResponseResult<boolean>>(url, forgotPass);
  }

  UpdateNew(idUser: number, user: LoginModel): Observable<boolean> {
    const url = this.url + `/updateUser/${idUser}`;
    return this.httpClient.post<boolean>(url, user);
  }

  getClientIPAddress(): Observable<any>{
    return this.httpClient.get<any>('http://api.ipify.org/?format=json')
  };

}
