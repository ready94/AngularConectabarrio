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

  @Input() set userLoggedIn(value: LoginDto) {
    if (value) {
      this._userLoggedIn = value;
    }
  }

  get userLoggedIn(): LoginDto {
    return this._userLoggedIn;
  }

  private _userLoggedIn: LoginDto = null;

  constructor(
    private newsSvc: NewsService,
    private translateSvc: TranslateService,
    private creationDialog: MatDialog
  ) {
    // this.test();
  }

  ngOnInit(): void {
    this.getNews();
  }

  createNew(): void {
    const dialog = this.creationDialog.open(NewsFormComponent, {
      width: '30%',
      height: '70%',
      autoFocus: false,
      data: { idUser: this._userLoggedIn.idUser },
    });

    dialog.afterClosed().subscribe({
      next: (res: boolean) => {this.getNews();},
    });
  }

  saveGoogleNews(data: GoogleNewsModel[]): void {
    this.newsSvc.SaveGoogleNews(data).subscribe({
      next: (res: boolean) => {},
      error: (error: string) => {},
    });
  }

  getNews(): void {
    this.newsSvc.GetGoogleNews().subscribe({
      next: (data: NewsResponse) => {
        debugger;
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
    debugger
    for(let i: number = 0; i < this.news.length; i += 3){
      this.rowsGoogle.push(this.news.slice(i, i + 3));
    }
  }

  getNewsInRows(): void {
    debugger
    for(let i: number = 0; i < this.userNews.length; i += 3){
      this.rowsNews.push(this.userNews.slice(i, i + 3));
    }
  }

}
