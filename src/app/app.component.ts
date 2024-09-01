import { Component, OnInit, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EnumRoles } from '@login/enums/roles.enum';
import { LoginDto } from '@login/models/loginDTO.model';
import { TranslateService } from '@ngx-translate/core';
import { EnumMenuOptions } from '@shared/enums/enum-options-menu.enum';
import { OptionsModel } from '@shared/models/options.model';
import { AuthService } from '@shared/services/auth.service';
import { MainConfigurationService } from '@shared/services/main-configuration.service';
import { SharedService } from '@shared/services/shared-service.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'ConectaBarrio';

  isIFrame: boolean;
 
  options: OptionsModel[] = [];

  @ViewChild('sidenav') sidenav: MatSidenav;

  opened: boolean = false;
  isLogged: boolean;
  userLog: LoginDto;
  enumRoles = EnumRoles;

  closeSidenav(): void {
    this.opened = false;
  }

  openOption(option: OptionsModel): void {
    switch (option.idOption) {
      case EnumMenuOptions.HOME:
        this.router.navigate(['home']);
        break;
      case EnumMenuOptions.NEWS:
        this.router.navigate(['news']);
        break;
      case EnumMenuOptions.EVENTS:
        this.router.navigate(['activities']);
        break;
      case EnumMenuOptions.COMPLAINTS:
        this.router.navigate(['complaints']);
        break;
      // case EnumMenuOptions.CALENDAR:
      //   this.router.navigate(['calendar']);
      //   break;
      case EnumMenuOptions.ADMINISTRATION:
        this.router.navigate(['admin']);
        break;
    }
  }
  constructor(
    private mainConfSvc: MainConfigurationService,
    private readonly router: Router,
    private translateSvc: TranslateService,
    private readonly titleService: Title,
    private matIconReg: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private sharedSvc: SharedService,
    private authSvc: AuthService
  ) {
      this.translateSvc.setDefaultLang('es');
      this.translateSvc.use('es');
  }
  
  ngOnInit(): void {
    this.isIFrame = window !== window.parent && !window.opener;

    if (this.authSvc.isAuthenticated()) {
      this.isLogged = true;
      this.userLog = this.authSvc.GetCurrentUserSession().user;
    }
  
    this.sharedSvc.GetSideNavMenuOptions().subscribe({
      next: (res: OptionsModel[]) => {
        this.options = res;
      },
      error: (err: string) => {},
    });
  }
}
