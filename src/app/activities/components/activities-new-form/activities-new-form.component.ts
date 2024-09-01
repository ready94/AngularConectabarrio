import { ActivitiesModel } from '@activities/models/activities.model';
import { EventCategoryModel } from '@activities/models/event-category.model';
import { EventSubcategoryModel } from '@activities/models/event-subcategory.model';
import { EventTypeModel } from '@activities/models/event-type.model';
import { ActivitiesService } from '@activities/services/activities.service';
import { Component, Inject } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { MsgService } from '@shared/services/msg.service';
import { SpinnerService } from '@shared/services/spinner.service';

@Component({
  selector: 'app-activities-new-form',
  templateUrl: './activities-new-form.component.html',
  styleUrl: './activities-new-form.component.scss'
})
export class ActivitiesNewFormComponent {
  formData: FormGroup;
  hide = true;
  disabled = false;
  returnUrl: string;
  idUser: number;

  types: EventTypeModel[] = [];
  categories: EventCategoryModel[] = [];
  subcategories: EventSubcategoryModel[] = [];
  subCategoriesFiltered: EventSubcategoryModel[] = [];

  constructor(
    private creationDialog: MatDialog,
    private dialogRef: MatDialogRef<ActivitiesNewFormComponent>,
    private formBuilder: UntypedFormBuilder,
    private msgSvc: MsgService,
    private spinnerSvc: SpinnerService,
    private activitySvc: ActivitiesService,
    private translateSvc: TranslateService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.idUser = data.idUser;
    this.getEventTypes();
    this.getEventCategories();
    this.getEventSubCategories();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formData = this.formBuilder.group({
      idEventType: null, 
      idEventCategory: null,
      idEventSubCategory: null,
      location: [null, [Validators.required]],
      maxPerson: null,
      eventDate: null
    });
  }


  getEventTypes(): void {
    this.activitySvc.GetEventTypes().subscribe({
      next: (res: EventTypeModel[]) => {
        this.types = res;
      },
    });
  }

  getEventCategories(): void {
    this.activitySvc.GetEventCategories().subscribe({
      next: (res: EventCategoryModel[]) => {
        this.categories = res;
      },
    });
  }

  getEventSubCategories(): void {
    this.activitySvc.GetEventSubCategories().subscribe({
      next: (res: EventSubcategoryModel[]) => {
        this.subcategories = res;
      },
    });
  }


  register(): void {
    if (this.formData.valid) {
      let activity: ActivitiesModel = this.formData.value; 
      activity.creationUser = this.idUser;
      activity.idEvent = 0;

      this.activitySvc.CreateEvent(activity).subscribe({
        next: (res: boolean) => {
          if (res === true) {
            const msg: string = this.translateSvc.instant("SUCCESS.ACTIVITY_CREATED");
            this.msgSvc.showAlertSuccess(msg);
            this.dialogRef.close(true);
          } else {
            const msg: string = this.translateSvc.instant("ERROR.ACTIVITY_CREATION");
            this.msgSvc.showAlertError(msg);
          }
        },
      });
    }
  }

  selectCategory(idCat: number): void{
    debugger
    this.subCategoriesFiltered  = [];
    this.subCategoriesFiltered = this.subcategories.filter(res => res.idEventCategory == idCat);
    debugger
  }
}