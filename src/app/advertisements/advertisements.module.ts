import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdvertisementsRoutingModule } from './advertisements-routing.module';
import { AdvertisementContainerComponent } from './components/advertisement-container/advertisement-container.component';
import { AdvertisementMainComponent } from './components/advertisement-main/advertisement-main.component';
import { AdvertisementComponent } from './pages/advertisement/advertisement.component';
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AdvertisementComponent,
    AdvertisementContainerComponent,
    AdvertisementMainComponent,
    AdvertisementListComponent    
  ],
  imports: [CommonModule, AdvertisementsRoutingModule, SharedModule, TranslateModule, MaterialModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdvertisementsModule {}
