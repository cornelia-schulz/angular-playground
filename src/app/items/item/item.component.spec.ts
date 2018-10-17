import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ItemComponent } from './item.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ItemsService } from 'src/app/shared';
import { RouterTestingModule } from '@angular/router/testing';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,
                HttpModule,
                RouterTestingModule],
      declarations: [ ItemComponent,
                      ItemDetailComponent ],
      providers: [ItemsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
