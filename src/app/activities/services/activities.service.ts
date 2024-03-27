import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  url: string = `${environment.apiUrl}`;
  constructor(private router: Router,
    private httpClient: HttpClient) {

    //PARA TESTEAR QUE FUNCIONA
    this.url += "/SQLTEST";

   }

   public GetSqlTest(): Observable<string[]> {
    const url = this.url;
    return this.httpClient.get<string[]>(url);
   }


}
