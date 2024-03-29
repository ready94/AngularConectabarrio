import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/pages/home/home.component';

@NgModule({
  declarations: [
  ],
  imports: [
    HomeComponent,
    AppComponent,
    CommonModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
