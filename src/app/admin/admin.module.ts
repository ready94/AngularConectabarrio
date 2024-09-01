import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminActivityFormComponent } from './components/activities/activity-form/activity-form.component';
import { AdminContainerComponent } from './components/admin-container/admin-container.component';
import { AdminLeftPanelComponent } from './components/admin-left-panel/admin-left-panel.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminRightPanelComponent } from './components/admin-right-panel/admin-right-panel.component';
import { AdminComplaintFormComponent } from './components/complaints/complaint-form/complaint-form.component';
import { AdminNewsFormComponent } from './components/news/news-form/news-form.component';
import { AdminUserFormComponent } from './components/users/user-form/user-form.component';
import { AdminMainPageComponent } from './pages/admin-main-page/admin-main-page.component';

@NgModule({
  declarations: [
    AdminContainerComponent,
    AdminMainPageComponent,
    AdminMainComponent,
    AdminLeftPanelComponent,
    AdminRightPanelComponent,
    AdminUserFormComponent,
    AdminComplaintFormComponent,
    AdminNewsFormComponent,
    AdminActivityFormComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    TranslateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
