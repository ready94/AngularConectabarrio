import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Error404Component } from '../error404/error404.component';
import { MaterialModule } from '../material/material.module';
import { CustomSpinnerComponent } from './components/custom-spinner/custom-spinner.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';

@NgModule({
  declarations: [
    MainNavbarComponent,
    CustomSpinnerComponent,
    Error404Component
  ],
  imports: [
    // BrowserAnimationsModule,
    CommonModule,
    TranslateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MainNavbarComponent, 
    CustomSpinnerComponent],
})
export class SharedModule {}
