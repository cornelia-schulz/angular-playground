import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ItemsService } from '../../shared';
import { Observable, fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-items-search',
  templateUrl: './items-search.component.html',
  styleUrls: ['./items-search.component.css']
})
export class ItemsSearchComponent implements OnInit {
  // this is a reference to #itemsSearch in the items-search.component.html file
  @ViewChild('itemsSearch') itemsSearch;
  @Output() results = new EventEmitter();

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    const search = this.getNativeElement(this.itemsSearch);
    const subscription = fromEvent(search, 'keyup')
      .pipe(debounceTime(200)) // delays (throttling) event
      .pipe(distinctUntilChanged())  // doesn't update if you type, delete and type the same thing
      .pipe(map((event: any) => event.target.value))
      .pipe(switchMap(query => this.itemsService.search(query)))
      .subscribe((items) => this.results.emit(items));
  }

// switchMap takes one observable stream and maps it to another, in this case to the itemsService

  getNativeElement(element) {
    return element.nativeElement;
  }

}
