import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslationUiService } from './translation-ui.service';
import { StorageService } from './storage.service';
import { CurrentUser } from '@shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class MainConfigurationService {
  constructor(
    private authSvc: AuthService,
    private translateSvc: TranslateService,
    private translationUISvc: TranslationUiService,
    private storageSvc: StorageService
  ) {}

  ApplyMainConfiguration(): void {
    const LANGSTORED = this.getLanguageFromLocalStorage();

    if (this.authSvc.isLoggedIn()) {
      const USER = this.authSvc.getCurrentUserData();
      if (LANGSTORED === null || LANGSTORED !== USER.languageKey) {
        this.ChangeLanguage(USER.languageKey);
      } else {
        this.setLanguage(USER.languageKey);
      }
    }else{
      if (LANGSTORED !== null){
        this.setLanguage(LANGSTORED);
      }else {
        this.setLanguage(this.translateSvc.defaultLang);
      }
    }
  }

  ApplyMainConfigurationLogin(currentUser: CurrentUser): void {
    const LANGSTORED = this.getLanguageFromLocalStorage();

    if (this.authSvc.isLoggedIn()) {
        this.ChangeLanguage(currentUser.languageKey);
    }else{
      if (LANGSTORED !== null){
        this.setLanguage(LANGSTORED);
      }else {
        this.setLanguage(this.translateSvc.defaultLang);
      }
    }
  }

  ChangeLanguage(lang: string): void {
    this.setLanguageToLocalStorage(lang);
    this.setLanguage(lang);
  }

  private setLanguage(lang: string): void {
    this.translateSvc.use(lang).subscribe({
      next: () => {
        this.translationUISvc.init(lang);
      }, error: () => {
        this.translationUISvc.init(this.translateSvc.currentLang);
      }
    })
  }

  private setLanguageToLocalStorage(lang: string): void {
    this.storageSvc.SetDataToLocalStorage(lang, 'barrio-lang');
  }
  private getLanguageFromLocalStorage(): string {
    return this.storageSvc.GetDataFromLocalStorage('barrio-lang');
  }


}
