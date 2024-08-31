import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComplaintsService } from '@complaints/services/complaints.service';
import { LoginDto } from '@login/models/loginDTO.model';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@shared/services/auth.service';
import { ComplaintFormComponent } from '../complaint-form/complaint-form.component';
import { ComplaintModel } from '@complaints/models/complaint.model';
import { UserService } from '@login/services/user.service';

@Component({
  selector: 'app-complaints-container',
  templateUrl: './complaints-container.component.html',
  styleUrl: './complaints-container.component.scss',
})
export class ComplaintsContainerComponent implements OnInit {
  myComplaintList: ComplaintModel[] = [];
  complaintList: ComplaintModel[] = [];

  rowsMyComplaints: any[] = [];
  rowsComplaints: any[] = [];

  userLoggedIn: LoginDto = null;
  logged: boolean = false;

  constructor(
    private complaintSvc: ComplaintsService,
    private translateSvc: TranslateService,
    private creationDialog: MatDialog,
    private authSvc: AuthService,
    private userSvc: UserService
  ) {
    if (this.authSvc.isAuthenticated()) {
      this.logged = true;
      this.userLoggedIn = this.authSvc.GetCurrentUserSession().user;
    }
  }

  ngOnInit(): void {
    this.getComplaints();
  }

  createComplaint(): void {
    const dialog = this.creationDialog.open(ComplaintFormComponent, {
      width: '30%',
      height: '70%',
      autoFocus: false,
      data: { idUser: this.userLoggedIn.idUser },
    });

    dialog.afterClosed().subscribe({
      next: (res: boolean) => {
        if(res)
          this.getComplaints();
      },
    });
  }

  getComplaints(): void {
    this.myComplaintList = [];
    this.complaintList = [];

    this.complaintSvc.GetAllComplaints().subscribe({
      next: (data: ComplaintModel[]) => {
        data.forEach((comp) => {
          if (comp.creationUser === this.userLoggedIn.idUser) {
            this.myComplaintList.push(comp);
          } else {
            this.complaintList.push(comp);
          }
        });

        this.getMyComplaintsInRows();
        this.getComplaintsInRows();
      },
      error: (error: string) => {},
    });
   
  }

  getMyComplaintsInRows(): void {
    for (let i: number = 0; i < this.myComplaintList.length; i += 3) {
      this.rowsMyComplaints.push(this.myComplaintList.slice(i, i + 3));
    }
  }

  getComplaintsInRows(): void {
    for (let i: number = 0; i < this.complaintList.length; i += 3) {
      this.rowsComplaints.push(this.complaintList.slice(i, i + 3));
    }
  }

  update(item: any) {
  }
    
  delete(item: any){
  }
    
}
