import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ItemsSearchComponent } from './items-search.component';
import { ItemsService } from '../../shared';
import { HttpModule } from '@angular/http';

describe('ItemsSearchComponent', () => {
  let component: ItemsSearchComponent;
  let fixture: ComponentFixture<ItemsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ ItemsSearchComponent ],
      providers: [ItemsService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
