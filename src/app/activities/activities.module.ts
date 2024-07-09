import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ActivitiesMainComponent } from './components/activities-main/activities-main.component';
import { ActivitiesSearchComponent } from './components/activities-search/activities-search.component';

@NgModule({
  declarations: [
    ActivitiesComponent, ActivitiesMainComponent, ActivitiesSearchComponent
  ],
  imports: [CommonModule, ActivitiesRoutingModule, SharedModule, MaterialModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ActivitiesModule {}
