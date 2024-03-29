import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComplaintModel } from '../models/complaint.model';

@Injectable({
  providedIn: 'root',
})
export class ComplaintsService {
  url: string = `${environment.apiUrl}/Complaint`;

  constructor(private router: Router, private httpClient: HttpClient) {}

  CreateComplaint(idUser: number, complaint: ComplaintModel): Observable<boolean> {
    debugger;
    const url = this.url + `/createComplaint/${idUser}`;
    return this.httpClient.post<boolean>(url, complaint);
  }

  UpdateComplaint(idUser: number, complaint: ComplaintModel): Observable<boolean> {
    debugger;
    const url = this.url + `/updateComplaint/${idUser}`;
    return this.httpClient.post<boolean>(url, complaint);
  }

  DeleteComplaint(idUser: number, idComplaint: number): Observable<boolean> {
    debugger;
    const url = this.url + `/deleteComplaint/${idUser}`;
    return this.httpClient.post<boolean>(url, idComplaint);
  }

  GetComplaintData(idComplaint: number): Observable<ComplaintModel> {
    debugger;
    const url = this.url + `/getComplaint/${idComplaint}`;
    return this.httpClient.get<ComplaintModel>(url);
  }

  GetAllComplaints(): Observable<ComplaintModel[]> {
    const url = this.url + `/getAllComplaints`;
    return this.httpClient.get<ComplaintModel[]>(url);
  }
}
