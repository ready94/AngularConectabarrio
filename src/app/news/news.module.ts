import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { NewsContainerComponent } from './components/news-container/news-container.component';
import { NewsFormComponent } from './components/news-form/news-form.component';
import { NewsMainComponent } from './components/news-main/news-main.component';
import { NewsVisualizatorComponent } from './components/news-visualizator/news-visualizator.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './pages/news/news.component';

@NgModule({
  declarations: [
    NewsComponent,
    NewsMainComponent,
    NewsContainerComponent,
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
