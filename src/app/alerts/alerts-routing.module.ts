import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
