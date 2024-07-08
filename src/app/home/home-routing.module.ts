import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeMainComponent } from './components/home-main/home-main.component';

const routes: Routes = [
  { path: '', component: HomeMainComponent },
  { path: 'home', component: HomeMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
