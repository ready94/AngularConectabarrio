import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { SportsContainerComponent } from './components/sports/sports-container/sports-container.component';
import { SportsListComponent } from './components/sports/sports-list/sports-list.component';
import { SportsMainComponent } from './components/sports/sports-main/sports-main.component';
import { TabletopContainerComponent } from './components/tournaments/tabletop/tabletop-container/tabletop-container.component';
import { TabletopListComponent } from './components/tournaments/tabletop/tabletop-list/tabletop-list.component';
import { TabletopMainComponent } from './components/tournaments/tabletop/tabletop-main/tabletop-main.component';
import { VideogamesContainerComponent } from './components/tournaments/videogames/videogames-container/videogames-container.component';
import { VideogamesListComponent } from './components/tournaments/videogames/videogames-list/videogames-list.component';
import { VideogamesMainComponent } from './components/tournaments/videogames/videogames-main/videogames-main.component';
import { SharedModule } from '../shared/shared.module';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    SportsContainerComponent,
    SportsListComponent,
    SportsMainComponent,
    TabletopContainerComponent,
    TabletopListComponent,
    TabletopMainComponent,
    VideogamesContainerComponent,
    VideogamesListComponent,
    VideogamesMainComponent,
    ActivitiesComponent
  ],
  imports: [CommonModule, ActivitiesRoutingModule, SharedModule, MaterialModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ActivitiesModule {}
