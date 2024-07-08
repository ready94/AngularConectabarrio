import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NewsRoutingModule } from './news-routing.module';
import { NewsContainerComponent } from './components/news-container/news-container.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsMainComponent } from './components/news-main/news-main.component';
import { NewsVisualizatorComponent } from './components/news-visualizator/news-visualizator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsComponent } from './pages/news/news.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    NewsContainerComponent,
    NewsListComponent,
    NewsMainComponent,
    NewsVisualizatorComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NewsModule {}
