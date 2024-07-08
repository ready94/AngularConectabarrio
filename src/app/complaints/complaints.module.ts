import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ComplaintsRoutingModule } from './complaints-routing.module';
import { ComplaintsComponent } from './pages/complaints/complaints.component';
import { ComplaintsContainerComponent } from './components/complaints-container/complaints-container.component';
import { ComplaintsListComponent } from './components/complaints-list/complaints-list.component';
import { ComplaintsMainComponent } from './components/complaints-main/complaints-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ComplaintsComponent, ComplaintsContainerComponent, ComplaintsListComponent, ComplaintsMainComponent],
  imports: [
    CommonModule,
    ComplaintsRoutingModule,
    SharedModule, FormsModule, ReactiveFormsModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComplaintsModule { }
