import { Component, Inject } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EnumComplaintPriority } from '@complaints/enums/complaint-priority.enum';
import { EnumComplaintType } from '@complaints/enums/complaint-type.enum';
import { ComplaintModel } from '@complaints/models/complaint.model';
import { ComplaintDTO } from '@complaints/models/complaintDTO.model';
import { ComplaintsService } from '@complaints/services/complaints.service';
import { TranslateService } from '@ngx-translate/core';
import { MsgService } from '@shared/services/msg.service';
import { SpinnerService } from '@shared/services/spinner.service';

@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.component.html',
  styleUrl: './complaint-form.component.scss'
})
export class ComplaintFormComponent {
  formData: FormGroup;
  hide = true;
  disabled = false;
  returnUrl: string;
  idUser: number;

  types: any = [
    { key: EnumComplaintType.INCIDENT, value: 'COMPLAINTS.TYPES.INCIDENT' },
    { key: EnumComplaintType.SOCIAL, value: 'COMPLAINTS.TYPES.SOCIAL' },
    { key: EnumComplaintType.REQUEST, value: 'COMPLAINTS.TYPES.REQUEST' }
  ];

  priorities: any = [
    { key: EnumComplaintPriority.LOW, value: 'COMPLAINTS.TYPE_PRIORITY.LOW' },
    { key: EnumComplaintPriority.MEDIUM, value: 'COMPLAINTS.TYPE_PRIORITY.MEDIUM' },
    { key: EnumComplaintPriority.HIGH, value: 'COMPLAINTS.TYPE_PRIORITY.HIGH' },
    { key: EnumComplaintPriority.URGENT, value: 'COMPLAINTS.TYPE_PRIORITY.URGENT' }
  ]

  complaintToUpdate: ComplaintModel;

  constructor(
    private creationDialog: MatDialog,
    private dialogRef: MatDialogRef<ComplaintFormComponent>,
    private formBuilder: UntypedFormBuilder,
    private msgSvc: MsgService,
    private spinnerSvc: SpinnerService,
    private complaintSvc: ComplaintsService,
    private translateSvc: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.idUser = data.idUser;
    if(data.complaintToUpdate)
      this.complaintToUpdate = data.complaintToUpdate;
  }
  ngOnInit(): void {
    this.spinnerSvc.show();
    this.createForm();
    if(this.complaintToUpdate)
      this.formData.patchValue(this.complaintToUpdate);
  }

  createForm(): void {
    this.formData = this.formBuilder.group({
      idComplaintType: null,
      idPriority: null,
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
    this.spinnerSvc.hide();
  }

  register(): void {
    if (this.formData.valid) {
      if(this.complaintToUpdate){
        this.complaintSvc.UpdateComplaint(this.idUser, this.formData.value, this.complaintToUpdate.idComplaint).subscribe({
          next: (res: boolean) => {
            if (res === true) {
              const msg: string = this.translateSvc.instant("SUCCESS.COMPLAINT_UPDATED");
              this.msgSvc.showAlertSuccess(msg);
              this.dialogRef.close(true);
            } else {
              const msg: string = this.translateSvc.instant("ERROR.COPMLAINT_UPDATE");
              this.msgSvc.showAlertError(msg);
            }
          },
        });
      }
      else {
          this.complaintSvc.CreateComplaint(this.idUser, this.formData.value).subscribe({
          next: (res: boolean) => {
            if (res === true) {
              const msg: string = this.translateSvc.instant("SUCCESS.COMPLAINT_CREATED");
              this.msgSvc.showAlertSuccess(msg);
              this.dialogRef.close(true);
            } else {
              const msg: string = this.translateSvc.instant("ERROR.COMPLAINT_CREATION");
              this.msgSvc.showAlertError(msg);
            }
          },
        });
      }
    }
  }
}