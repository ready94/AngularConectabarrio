import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [HomeComponent, HomeContainerComponent, HomeMainComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
