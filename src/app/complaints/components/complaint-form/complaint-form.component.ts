import { Component, Inject } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EnumComplaintPriority } from '@complaints/enums/complaint-priority.enum';
import { EnumComplaintType } from '@complaints/enums/complaint-type.enum';
import { ComplaintsService } from '@complaints/services/complaints.service';
import { NewsService } from '@news/services/news.service';
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
    { key: EnumComplaintType.INCIDENT, value: 'INCIDENTE' },
    { key: EnumComplaintType.SOCIAL, value: 'SOCIAL' },
    { key: EnumComplaintType.REQUEST, value: 'PETICIÓN' }
  ];

  priorities: any = [
    { key: EnumComplaintPriority.LOW, value: 'BAJA' },
    { key: EnumComplaintPriority.MEDIUM, value: 'MEDIA' },
    { key: EnumComplaintPriority.HIGH, value: 'ALTA' },
    { key: EnumComplaintPriority.URGENT, value: 'URGENTE' }
  ]

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
  }
  ngOnInit(): void {
    this.spinnerSvc.show();
    this.createForm();
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
      this.complaintSvc.CreateComplaint(this.idUser, this.formData.value).subscribe({
        next: (res: boolean) => {
          if (res === true) {
            this.msgSvc.showAlertSuccess("OK");
            this.dialogRef.close(true);
          } else {
            this.msgSvc.showAlertError("ERROR");
          }
        },
      });
    }
  }
}