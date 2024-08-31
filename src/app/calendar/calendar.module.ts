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
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarContainerComponent,
    CalendarListComponent,
    CalendarMainComponent,
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedModule,
    TranslateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CalendarModule {}
