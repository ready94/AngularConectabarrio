import { Component, Inject } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDateFormats } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EnumNewsCategory } from '@news/enums/news-category.enum';
import { NewsModel } from '@news/models/news.model';
import { NewsService } from '@news/services/news.service';
import { TranslateService } from '@ngx-translate/core';
import { MsgService } from '@shared/services/msg.service';
import { SpinnerService } from '@shared/services/spinner.service';

export const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-news-form',
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss',
})
export class NewsFormComponent {
  formData: FormGroup;
  hide = true;
  disabled = false;
  returnUrl: string;
  idUser: number;

  categories: any = [
    { key: EnumNewsCategory.INFO, value: 'NEWS.CATEGORY.INFO' },
    { key: EnumNewsCategory.SOCIAL, value: 'NEWS.CATEGORY.SOCIAL' }
  ];

  newToUpdate: NewsModel;

  constructor(
    private creationDialog: MatDialog,
    private dialogRef: MatDialogRef<NewsFormComponent>,
    private formBuilder: UntypedFormBuilder,
    private msgSvc: MsgService,
    private spinnerSvc: SpinnerService,
    private newsSvc: NewsService,
    private translateSvc: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.idUser = data.idUser;
    if(data.updateNew)
      this.newToUpdate = data.updateNew;
    
  }

  ngOnInit(): void {
    this.spinnerSvc.show();
    this.createForm();
    if(this.newToUpdate)
      this.formData.patchValue(this.newToUpdate);
    
  }

  createForm(): void {
    this.formData = this.formBuilder.group({
      idCategory: null,
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
    });
    this.spinnerSvc.hide();
  }

  register(): void {
    if (this.formData.valid) {

      if(this.newToUpdate)
        {
        this.newsSvc.UpdateNew(this.idUser, this.formData.value, this.newToUpdate.idNew).subscribe({
          next: (res: boolean) => {
            if (res === true) {
              const msg: string = this.translateSvc.instant("SUCCESS.NEW_UPDATED")
              this.msgSvc.showAlertSuccess(msg);
              this.dialogRef.close(true);
            } else {
              this.msgSvc.showAlertError("ERROR");
            }
          },
        });
      }
      else
      {
      this.newsSvc.CreateNew(this.idUser, this.formData.value).subscribe({
        next: (res: boolean) => {
          if (res === true) {
            const msg: string = this.translateSvc.instant("SUCCESS.NEW_CREATED")
              this.msgSvc.showAlertSuccess(msg);
            this.dialogRef.close(true);
          } else {
            this.msgSvc.showAlertError("ERROR");
          }
        },
      });
    }
    }
  }
}
