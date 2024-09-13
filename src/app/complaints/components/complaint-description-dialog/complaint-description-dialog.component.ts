import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ComplaintModel } from '@complaints/models/complaint.model';

@Component({
  selector: 'app-complaint-description-dialog',
  templateUrl: './complaint-description-dialog.component.html',
  styleUrl: './complaint-description-dialog.component.scss'
})
export class ComplaintDescriptionDialogComponent {

  item: ComplaintModel;

  constructor(
    private dialogRef: MatDialogRef<ComplaintDescriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ){
    if(data) this.item = data.item;
  }

  close(): void {
    this.dialogRef.close();
  }

}
