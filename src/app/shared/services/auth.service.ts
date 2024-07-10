import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { EncryptionService } from './encryption.service';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { CurrentUser } from '@shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private cryptoSvc: EncryptionService,
    private storageSvc: StorageService,
    private router: Router
  ) {}

  setTokenToLocalStorage(token: string): void {
    this.storageSvc.SetDataToLocalStorage(token, 'barrioToken');
  }

  removeTokenToLocalStorage(): void {
    this.storageSvc.RemoveDataFromLocalStorage('barrioToken');
  }

  getTokenFromLocalStorage(): string {
    return this.storageSvc.GetDataFromLocalStorage('barrioToken');
  }

  isLoggedIn(): boolean {
    return !this.isExpired();
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getCurrentUserData(): CurrentUser | null {
    let result: CurrentUser;
    try {
      const token = this.getTokenFromLocalStorage();
      const decoded = this.jwtHelper.decodeToken(token);
      result = {
        idUser: +decoded.idUser,
        userName: decoded.userName,
        languageKey: decoded.languageKey,
        idLanguage: +decoded.idLanguage,
        idTheme: +decoded.idTheme,
        idSession: decoded.idSession,
      };
    } catch (e) {
      return null;
    }

    return result;
  }

  isExpired(): boolean {
    let result = true;
    try {
      const token = this.getTokenFromLocalStorage();
      result = this.jwtHelper.isTokenExpired(token);

      if (token != null && result === true) {
        this.router.navigate(['login']);
      }
    } catch (e) {
      result = true;
    }
    return result;
  }

  SetSessionStorageToken(userName: string): void {
    const userSession = {userName, token: 'barrioSession'};
    sessionStorage.setItem('currentUser', JSON.stringify(userSession));
  }
  
  LogOut(): void {
    sessionStorage.removeItem('currentUser');
  }

  GetCurrentUserSession(): any {
    return JSON.parse(sessionStorage.getItem('currentUser'));
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('currentUser');
  }
}
