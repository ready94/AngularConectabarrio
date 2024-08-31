import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OptionsModel } from '@shared/models/options.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  url: string = `${environment.apiUrl}/shared`;
  constructor(private router: Router,
    private httpClient: HttpClient) {
   }


   GetSideNavMenuOptions(): Observable<OptionsModel[]>{
    const url = this.url + `/getMenuOptions`;
    return this.httpClient.get<OptionsModel[]>(url);
  }
  
   
}
