import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintsMainComponent } from './components/complaints-main/complaints-main.component';

const routes: Routes = [
  { path: '', component: ComplaintsMainComponent },
  { path: 'complaints', component: ComplaintsMainComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintsRoutingModule { }
