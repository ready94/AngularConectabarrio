import {
  APP_BASE_HREF,
  CommonModule,
  LocationStrategy,
  PlatformLocation,
  registerLocaleData,
} from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';
import { NgModule, NO_ERRORS_SCHEMA, Provider } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { HomeModule } from '@home/home.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from '@login/login.module';
import { NewsModule } from '@news/news.module';
import { ComplaintsModule } from '@complaints/complaints.module';
import { CalendarModule } from '@calendar/calendar.module';
import { AlertsModule } from '@alerts/alerts.module';
import { AdvertisementsModule } from '@advertisements/advertisements.module';
import { ActivitiesModule } from '@activities/activities.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MatNativeDateModule,
} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MY_DATE_FORMATS } from '@news/components/news-form/news-form.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

registerLocaleData(localeEs, 'es-ES');
registerLocaleData(localeEn, 'en-GB');

const providersArray: Provider[] = [
  Title,
  {
    provide: APP_BASE_HREF,
    useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
    deps: [PlatformLocation],
  },
];

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
// }

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    //CommonModule,
    ActivitiesModule,
    AdvertisementsModule,
    AlertsModule,
    CalendarModule,
    ComplaintsModule,
    HomeModule,
    LoginModule,
    NewsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MaterialModule,

    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient, locationStrategy: LocationStrategy) => {
          return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
        },
        deps: [HttpClient],
      },
    }),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    providersArray,
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-GB',
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_DATE_FORMATS,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
