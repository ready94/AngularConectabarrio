import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NewsModel } from '@news/models/news.model';

@Component({
  selector: 'app-new-description-dialog',
  templateUrl: './new-description-dialog.component.html',
  styleUrl: './new-description-dialog.component.scss'
})
export class NewDescriptionDialogComponent {

  item: NewsModel;

  constructor(
    private dialogRef: MatDialogRef<NewDescriptionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ){
    debugger
    if(data) this.item = data.item;
  }

  close(): void {
    this.dialogRef.close();
  }

}
