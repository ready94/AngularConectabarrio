import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementService {
  
  url: string = `${environment.apiUrl}`;
  constructor(private router: Router,
    private httpClient: HttpClient) {

    //PARA TESTEAR QUE FUNCIONA
    this.url += "/SQLTEST";

   }
}
