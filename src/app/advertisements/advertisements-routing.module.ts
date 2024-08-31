import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementMainComponent } from './components/advertisement-main/advertisement-main.component';

const routes: Routes = [
  { path: '', component: AdvertisementMainComponent },
  { path: 'advertisement', component: AdvertisementMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvertisementsRoutingModule { }
