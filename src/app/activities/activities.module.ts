import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ActivitiesMainComponent } from './components/activities-main/activities-main.component';
import { ActivitiesSearchComponent } from './components/activities-search/activities-search.component';
import { TranslateModule } from '@ngx-translate/core';
import { ActivitiesNewFormComponent } from './components/activities-new-form/activities-new-form.component';

@NgModule({
  declarations: [
    ActivitiesComponent,
    ActivitiesMainComponent,
    ActivitiesSearchComponent,
    ActivitiesNewFormComponent,
  ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    SharedModule,
    TranslateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ActivitiesModule {}
