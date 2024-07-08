import { Component, Inject } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MAT_DATE_LOCALE, MatDateFormats } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@login/services/user.service';
import { EnumNewsCategory } from '@news/enums/news-category.enum';
import { NewsService } from '@news/services/news.service';
import { TranslateService } from '@ngx-translate/core';
import { ResponseResult } from '@shared/models/response-result.model';
import { AuthService } from '@shared/services/auth.service';
import { MainConfigurationService } from '@shared/services/main-configuration.service';
import { MsgService } from '@shared/services/msg.service';
import { SpinnerService } from '@shared/services/spinner.service';
import { StorageService } from '@shared/services/storage.service';

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
    { key: EnumNewsCategory.INFO, value: 'INFORMATIVAS' },
    { key: EnumNewsCategory.SOCIAL, value: 'SOCIALES' }
  ];

  constructor(
    private creationDialog: MatDialog,
    private formBuilder: UntypedFormBuilder,
    private msgSvc: MsgService,
    private router: Router,
    private route: ActivatedRoute,
    private spinnerSvc: SpinnerService,
    private storageSvc: StorageService,
    private authSvc: AuthService,
    private userSvc: UserService,
    private newsSvc: NewsService,
    private translateSvc: TranslateService,
    private mainConfigSvc: MainConfigurationService,
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
      this.newsSvc.CreateNew(this.idUser, this.formData.value).subscribe({
        next: (res: boolean) => {
          if (res) {
            this.msgSvc.showAlertSuccess("OK");
          } else {
            this.msgSvc.showAlertError("ERROR");
          }
        },
      });
    }
  }
}
