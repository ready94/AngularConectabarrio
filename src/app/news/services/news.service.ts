import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NewsModel } from '../models/news.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  url: string = `${environment.apiUrl}/News`;

  constructor(private router: Router, private httpClient: HttpClient) {}

  CreateNew(idUser: number, newModel: NewsModel): Observable<boolean> {
    const url = this.url + `/createNew/${idUser}`;
    return this.httpClient.post<boolean>(url, newModel);
  }

  UpdateNew(idUser: number, newModel: NewsModel): Observable<boolean> {
    const url = this.url + `/updateNew/${idUser}`;
    return this.httpClient.post<boolean>(url, newModel);
  }

  DeleteNew(idUser: number, idNew: number): Observable<boolean> {
    const url = this.url + `/deleteNew/${idUser}`;
    return this.httpClient.post<boolean>(url, idNew);
  }

  GetNewData(idNew: number): Observable<NewsModel> {
    const url = this.url + `/getNewData/${idNew}`;
    return this.httpClient.get<NewsModel>(url);
  }

  GetAllNews(): Observable<NewsModel[]> {
    const url = this.url + `/getAllNews`;
    return this.httpClient.get<NewsModel[]>(url);
  }
}
