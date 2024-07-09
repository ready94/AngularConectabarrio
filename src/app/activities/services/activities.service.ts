import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivitiesModel } from '@activities/models/activities.model';
import { FilterModel } from '@shared/models/filters.model';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  url: string = `${environment.apiUrl}/Activity`;

  constructor(private router: Router,
    private httpClient: HttpClient) {}

   public GetAllAvailableEvents(): Observable<ActivitiesModel[]> {
    const url = this.url;
    return this.httpClient.get<ActivitiesModel[]>(url);
   }

   public GetAllFilteredEvents(filters: FilterModel): Observable<ActivitiesModel[]> {
    const url = this.url + `/getFilteredEvents`;
    return this.httpClient.post<ActivitiesModel[]>(url, filters);
   }

   public GetEventByIdEvent(idEvent: number): Observable<ActivitiesModel> {
    const url = this.url + `/getEventByIdEvent/${idEvent}`;
    return this.httpClient.get<ActivitiesModel>(url);
   }

   public CreateEvent(activity: ActivitiesModel): Observable<boolean> {
    const url = this.url + `/createEvent`;
    return this.httpClient.post<boolean>(url, activity);
   }

   public DeleteEvent(idEvent: number, idUser: number): Observable<boolean> {
    const url = this.url + `/deleteEventByIdEvent/${idEvent}/${idUser}`;
    return this.httpClient.delete<boolean>(url);
   }

   public UpdateNumberOfPlayers(activity: ActivitiesModel): Observable<boolean> {
    const url = this.url + `/updateNumberOfPlayers`;
    return this.httpClient.put<boolean>(url, activity);
   }

   public UpdateEvent(idUser: number, activity: ActivitiesModel): Observable<boolean> {
    const url = this.url + `/updateEvent/${idUser}`;
    return this.httpClient.put<boolean>(url, activity);
   }
}
