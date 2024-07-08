import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news.component';
import { Error404Component } from '../error404/error404.component';
import { NewsMainComponent } from './components/news-main/news-main.component';

const routes: Routes = [
  { path: '', component: NewsMainComponent },
  { path: 'news', component: NewsMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
