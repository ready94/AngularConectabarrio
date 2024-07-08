import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  url: string = `${environment.apiUrl}/shared/ `;
  constructor(private router: Router,
    private httpClient: HttpClient) {
   }

  
   
}
