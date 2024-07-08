import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MainConfigurationService } from '@shared/services/main-configuration.service';

@Component({
    selector: 'app-root',
    standalone: false,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'ConectaBarrio';

  isIFrame: boolean;

  constructor(
    private mainConfSvc: MainConfigurationService,
    private readonly router: Router,
    private translateSvc: TranslateService,
    private readonly titleService: Title,
    private matIconReg: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.mainConfSvc.ApplyMainConfiguration();
  }

  ngOnInit(): void {
    this.isIFrame = window !== window.parent && !window.opener;
  }

}
