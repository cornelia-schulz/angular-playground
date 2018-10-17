import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';
import { WidgetComponent } from './widget/widget.component';
import { ReviewComponent } from './review/review.component';
import { NotificationsService } from './shared';
import { MatSnackBar } from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([
        {path: '', component: HomeComponent, data: { animation: 'home' }},
        {path: 'items', component: ItemsComponent, data: { animation: 'items' }},
        {path: 'item/:id', component: ItemComponent, data: { animation: 'items' }},
        {path: 'widgets', component: WidgetComponent, data: { animation: 'widgets' }},
        {path: 'review', component: ReviewComponent, data: { animation: 'review' }},
        // ** stands for any route, you can direct them wherever you like
        {path: '**', component: HomeComponent}
      ])],
      declarations: [
        AppComponent,
        HomeComponent,
        ItemsComponent,
        ItemComponent,
        WidgetComponent,
        ReviewComponent
      ],
      providers: [NotificationsService,
        {
          provide: MatSnackBar, useValue: {}
        }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Playground'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Playground');
  }));
  it('should render title in a span tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Playground');
  }));
});


