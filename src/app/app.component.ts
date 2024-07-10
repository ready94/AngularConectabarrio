import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
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
export class AppComponent implements OnInit {
  title = 'ConectaBarrio';

  isIFrame: boolean;
  opciones: any[] = [
    { id: 0, value: 'Inicio', icon: 'home' },
    { id: 1, value: 'Noticias', icon: 'newspaper' },
    { id: 2, value: 'Eventos', icon: 'campaign' },
    { id: 3, value: 'Alertas', icon: 'notifications' },
    { id: 4, value: 'Calendario', icon: 'calendar_month' },
  ];

  @ViewChild('sidenav') sidenav: MatSidenav;

  opened: boolean = false;

  closeSidenav(): void {
    this.opened = false;
  }

  openOption(option: any): void {
    debugger;
    switch (option.id) {
      case 0:
        this.router.navigate(['']);
        break;
      case 1:
        this.router.navigate(['news']);
        break;
      case 2:
        this.router.navigate(['activities']);
        break;
      case 3:
        this.router.navigate(['alerts']);
        break;
      case 4:
        this.router.navigate(['calendar']);
        break;
    }
  }
  constructor(
    private mainConfSvc: MainConfigurationService,
    private readonly router: Router,
    private translateSvc: TranslateService,
    private readonly titleService: Title,
    private matIconReg: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    //this.mainConfSvc.ApplyMainConfiguration();
  }

  ngOnInit(): void {
    this.isIFrame = window !== window.parent && !window.opener;
  }
}
