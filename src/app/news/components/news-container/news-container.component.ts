import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDto } from '@login/models/loginDTO.model';
import {
  GoogleNewsModel,
  NewsModel,
  NewsResponse,
} from '@news/models/news.model';
import { NewsService } from '@news/services/news.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@shared/services/auth.service';
import { MsgService } from '@shared/services/msg.service';
import { NewDescriptionDialogComponent } from '../new-description-dialog/new-description-dialog.component';
import { NewsFormComponent } from '../news-form/news-form.component';

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
    private authSvc: AuthService,
    private msgSvc: MsgService
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
      height: '62%',
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

  updateNew(item: NewsModel) {
    const dialog = this.creationDialog.open(NewsFormComponent, {
      width: '30%',
      height: '62%',
      autoFocus: false,
      data: { idUser: this.userLoggedIn.idUser,  updateNew: item},
    });

    dialog.afterClosed().subscribe({
      next: (res: boolean) => {
        if (res) this.getNews();
      },
    });
  }

  deleteNew(item: NewsModel){
    const msg: string = this.translateSvc.instant("CONFIRM.DELETE");
    this.msgSvc.ShowAlertConfirm('', msg, () => {this.confirmDelete(item);}, () => {});
  }

  confirmDelete(item: NewsModel){
    this.newsSvc.DeleteNew(this.userLoggedIn.idUser, item.idNew).subscribe({
      next: (res: boolean) => {
        if(res){
          const msg: string = this.translateSvc.instant("SUCCESS.DELETE");
          this.msgSvc.showAlertSuccess(msg);
          this.getNews();
        }else{
          const msg: string = this.translateSvc.instant("SUCCESS.DELETE");
          this.msgSvc.showAlertSuccess(msg);
        }

      }, error: (err: string) => {}
    })

  }

  openDescription(item: NewsModel){
    const dialog = this.creationDialog.open(NewDescriptionDialogComponent, {
      width: '30%',
      height: '40%',
      autoFocus: false,
      data: { item: item },
    });
  }

}
