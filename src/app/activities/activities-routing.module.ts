import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { Error404Component } from '../error404/error404.component';

const routes: Routes = [
  { path: '', component: ActivitiesComponent },
  { path: 'activities', component: ActivitiesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
