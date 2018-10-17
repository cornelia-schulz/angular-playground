import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { WidgetComponent } from './widget.component';
import { WidgetDetailsComponent } from './widget-details/widget-details.component';
import { WidgetsListComponent } from './widgets-list/widgets-list.component';
import { FormsModule } from '@angular/forms';
import { WidgetsService } from '../shared';
import { HttpModule } from '@angular/http';

describe('WidgetComponent', () => {
  let component: WidgetComponent;
  let fixture: ComponentFixture<WidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,
                HttpModule],
      declarations: [ WidgetComponent,
                      WidgetDetailsComponent,
                      WidgetsListComponent ],
      providers: [WidgetsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

