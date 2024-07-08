import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SpinnerService } from '@shared/services/spinner.service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  private url: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private spinnerSvc: SpinnerService
  ) {
    this.url = `${environment.apiUrl}/Login`;
  }

  public logOut(): void {
    this._logOut().subscribe({
      next: (res: boolean) => {
        localStorage.clear();
        this.router.navigate(['login']);
        this.spinnerSvc.hide();
      },
      error: (err: string) => {}
    })
  }

  private _logOut(): Observable<boolean> {
    const url = `${this.url}`;
    return this.http.delete<boolean>(url);
  }

}
