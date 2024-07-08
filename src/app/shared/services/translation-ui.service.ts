import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import es_ES from '@assets/es.json';
import en_GB from '@assets/en-GB.json';

@Injectable({
  providedIn: 'root'
})
export class TranslationUiService {

  private availabeLanguages = {es_ES, en_GB};
  constructor(private translateSvc: TranslateService) { }

  public init(langKey: string = null): any{
    if(langKey){
      const langAvailable = langKey.replace('-', '_');

      if(this.availabeLanguages[langAvailable]){
        this.translateSvc.setTranslation(langKey, this.availabeLanguages[langAvailable], true);
      }else{
        this.translateSvc.setTranslation('es-ES', this.availabeLanguages.es_ES, true);
      }
    }else{
      Object.keys(this.availabeLanguages).forEach((lang) => {
        this.translateSvc.setTranslation(lang.replace('_','-'), this.availabeLanguages[lang], true);
      })
    }
  }
}
