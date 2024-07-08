import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { TranslateModule } from '@ngx-translate/core';
import { NewsFormComponent } from './components/news-form/news-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    NewsComponent,
    NewsMainComponent,
    NewsContainerComponent,
    NewsListComponent,  
    NewsVisualizatorComponent,
    NewsFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    NewsRoutingModule,    
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],  
  providers: [  
    MatDatepickerModule,  
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NewsModule {}
