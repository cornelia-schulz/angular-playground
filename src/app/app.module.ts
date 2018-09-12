import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { WidgetsService } from './shared';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { ReviewComponent } from './review/review.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    ReviewComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [WidgetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
