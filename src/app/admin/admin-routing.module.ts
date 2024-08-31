import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { Error404Component } from '../error404/error404.component';

const routes: Routes = [
  { path: '', component: AdminMainComponent },
  { path: 'admin', component: AdminMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }