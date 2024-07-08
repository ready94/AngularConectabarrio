import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { CalendarContainerComponent } from './components/calendar-container/calendar-container.component';
import { CalendarListComponent } from './components/calendar-list/calendar-list.component';
import { CalendarMainComponent } from './components/calendar-main/calendar-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarContainerComponent,
    CalendarListComponent,
    CalendarMainComponent,
  ],
  imports: [CommonModule, CalendarRoutingModule, SharedModule, MaterialModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalendarModule {}
