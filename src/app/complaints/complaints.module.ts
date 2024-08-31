import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintFormComponent } from './components/complaint-form/complaint-form.component';
import { ComplaintsContainerComponent } from './components/complaints-container/complaints-container.component';
import { ComplaintsMainComponent } from './components/complaints-main/complaints-main.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';

@NgModule({
  declarations: [
    ComplaintsComponent,
    ComplaintsContainerComponent,
    ComplaintsMainComponent,
    ComplaintFormComponent,
  ],
  imports: [
    CommonModule,
    ComplaintsRoutingModule,
    SharedModule,
    TranslateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComplaintsModule {}
