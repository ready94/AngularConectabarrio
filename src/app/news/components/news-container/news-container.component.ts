import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  GoogleNewsModel,
  NewsModel,
  NewsResponse,
} from '@news/models/news.model';
import { NewsService } from '@news/services/news.service';
import { TranslateService } from '@ngx-translate/core';
import { NewsFormComponent } from '../news-form/news-form.component';
import { LoginDto } from '@login/models/loginDTO.model';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrl: './news-container.component.scss',
})
export class NewsContainerComponent implements OnInit {
  news: GoogleNewsModel[] = [];
  userNews: NewsModel[] = [];

  rowsGoogle: any[] = [];
  rowsNews: any[] = [];

  logged: boolean = false;
  userLoggedIn: LoginDto;

  constructor(
    private newsSvc: NewsService,
    private translateSvc: TranslateService,
    private creationDialog: MatDialog,
    private authSvc: AuthService
  ) {
    if (this.authSvc.isAuthenticated()) {
      this.logged = true;
      this.userLoggedIn = this.authSvc.GetCurrentUserSession().user;
    }
  }

  ngOnInit(): void {
    this.getNews();
  }

  createNew(): void {
    const dialog = this.creationDialog.open(NewsFormComponent, {
      width: '30%',
      height: '70%',
      autoFocus: false,
      data: { idUser: this.userLoggedIn.idUser },
    });

    dialog.afterClosed().subscribe({
      next: (res: boolean) => {
        if (res) this.getNews();
      },
    });
  }

  saveGoogleNews(data: GoogleNewsModel[]): void {
    this.newsSvc.SaveGoogleNews(data).subscribe({
      next: (res: boolean) => {},
      error: (error: string) => {},
    });
  }

  getNews(): void {
    this.news = [];
    this.userNews = [];

    this.newsSvc.GetGoogleNews().subscribe({
      next: (data: NewsResponse) => {
        this.news = data.articles;
        this.getGoogleNewsInRows();
      },
      error: (error: string) => {},
    });
    this.newsSvc.GetAllNews().subscribe({
      next: (data: NewsModel[]) => {
        this.userNews = data;
        this.getNewsInRows();
      },
      error: (error: string) => {},
    });
  }

  getGoogleNewsInRows(): void {
    this.rowsGoogle = [];
    for (let i: number = 0; i < this.news.length; i += 3) {
      this.rowsGoogle.push(this.news.slice(i, i + 3));
    }
  }

  getNewsInRows(): void {
    this.rowsNews = [];
    for (let i: number = 0; i < this.userNews.length; i += 3) {
      this.rowsNews.push(this.userNews.slice(i, i + 3));
    }
  }

  update(item: any) {
debugger;
  }

  delete(item: any){
debugger;
  }

}
