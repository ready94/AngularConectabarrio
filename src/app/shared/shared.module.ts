import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { CustomSpinnerComponent } from './components/custom-spinner/custom-spinner.component';
import { Error404Component } from '../error404/error404.component';

@NgModule({
  declarations: [
    MainNavbarComponent,
    MenuLateralComponent,
    CustomSpinnerComponent,
    Error404Component
  ],
  imports: [
    // BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MainNavbarComponent, 
    MenuLateralComponent, 
    CustomSpinnerComponent],
})
export class SharedModule {}
