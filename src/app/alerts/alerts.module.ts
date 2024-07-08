import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AlertsRoutingModule } from './alerts-routing.module';
import { AlertsContainerComponent } from './components/alerts-container/alerts-container.component';
import { AlertsListComponent } from './components/alerts-list/alerts-list.component';
import { AlertsMainComponent } from './components/alerts-main/alerts-main.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AlertsContainerComponent,
    AlertsListComponent,
    AlertsMainComponent,
    AlertsComponent
  ],
  imports: [CommonModule, AlertsRoutingModule, SharedModule, MaterialModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AlertsModule {}
