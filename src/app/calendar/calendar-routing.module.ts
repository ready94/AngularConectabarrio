import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { Error404Component } from '../error404/error404.component';
import { CalendarMainComponent } from './components/calendar-main/calendar-main.component';

const routes: Routes = [
  { path: '', component: CalendarMainComponent },
  { path: 'calendar', component: CalendarMainComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
