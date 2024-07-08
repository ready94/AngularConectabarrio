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


  @Input() set userLoggedIn(value: LoginDto) {
    debugger;
    if (value) {
      debugger;
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
    this.newsSvc.GetGoogleNews().subscribe({
      next: (data: NewsResponse) => {
        this.news = data.articles;
      },
      error: (error: string) => {},
    });
    this.newsSvc.GetAllNews().subscribe({
      next: (data: NewsModel[]) => {
        this.userNews = data;
      },
      error: (error: string) => {},
    });
  }

  createNew(): void {
    const dialog = this.creationDialog.open(NewsFormComponent, {
      width: '30%',
      height: '70%',
      autoFocus: false,
      data: {idUser: this._userLoggedIn.idUser}
    });
  }

  // private test(): void{
  //   let newTest: NewsModel = {
  //     active: true,
  //     creationDate: new Date(),
  //     creationUser: 1,
  //     description: "",
  //     endDate: new Date(),
  //     idCategory: 1,
  //     idNew: 1,
  //     name: "TEST",
  //     startDate: new Date(),
  //     modificationDate: null,
  //     modificationUser: null
  //   }

  //   this.newsSvc.CreateNew(1, newTest).subscribe({
  //     next: (res: boolean) => {
  //       console.log("TEST");
  //     }, error: (error: string) => {
  //       console.log("ERROR");
  //     }
  //   })
  // }
}
