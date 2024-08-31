import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminContainerComponent } from './components/admin-container/admin-container.component';
import { AdminMainPageComponent } from './pages/admin-main-page/admin-main-page.component';
import { AdminMainComponent } from './components/admin-main/admin-main.component';
import { AdminLeftPanelComponent } from './components/admin-left-panel/admin-left-panel.component';
import { AdminRightPanelComponent } from './components/admin-right-panel/admin-right-panel.component';

@NgModule({
  declarations: [
    AdminContainerComponent,
    AdminMainPageComponent,
    AdminMainComponent,
    AdminLeftPanelComponent,
    AdminRightPanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    TranslateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AdminModule {}
