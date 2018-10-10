import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ItemsService } from '../../shared'

import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.css']
})
export class ItemsSearchComponent implements OnInit {
  @ViewChild('itemsSearch') itemsSearch;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

  getNativeElement(element){
    return element.nativeElement;
  }

}
