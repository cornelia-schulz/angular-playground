import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { WidgetsService } from './shared';
import { ItemsService } from './shared';

import { AppComponent } from './app.component';
import { WidgetComponent } from './widget/widget.component';
import { ReviewComponent } from './review/review.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { WidgetsListComponent } from './widget/widgets-list/widgets-list.component';
import { WidgetDetailsComponent } from './widget/widget-details/widget-details.component';
import { ItemsSearchComponent } from './items/items-search/items-search.component';
import { StatusComponent } from './status/status.component';
import { UserComponent } from './user/user.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    ReviewComponent,
    HomeComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    WidgetsListComponent,
    WidgetDetailsComponent,
    ItemsSearchComponent,
    StatusComponent,
    UserComponent,
    NewsletterComponent,
    LoginComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [ItemsService, WidgetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
