import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { ItemsSearchComponent } from '../items/items-search/items-search.component';
import { HomeComponent } from './home.component';
import { ItemsListComponent } from '../items/items-list/items-list.component';
import { LoginComponent } from '../login/login.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { WidgetsListComponent } from '../widget/widgets-list/widgets-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsService, WidgetsService, NotificationsService } from '../shared';
import { HttpModule } from '@angular/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,
                HttpModule],
      declarations: [ HomeComponent,
                      ItemsSearchComponent,
                      ItemsListComponent,
                      LoginComponent,
                      NewsletterComponent,
                      WidgetsListComponent ],
      providers: [ItemsService,
                  WidgetsService,
                  NotificationsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
