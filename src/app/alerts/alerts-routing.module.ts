import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { Error404Component } from '../error404/error404.component';
import { AlertsMainComponent } from './components/alerts-main/alerts-main.component';

const routes: Routes = [
  { path: '', component: AlertsMainComponent },
  { path: 'alert', component: AlertsMainComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertsRoutingModule { }
