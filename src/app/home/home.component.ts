import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../shared/items.service';
import { Item } from '../shared/item.model';
import { WidgetsService } from '../shared/widgets.service';
import { Widget } from '../shared/widget.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[];
  widgets: Widget[];
  myStatus = 'active';

  constructor(private itemsService: ItemsService,
              private widgetsService: WidgetsService) { }

  logout($event) {
    this.myStatus = 'Logged out!';
  }

  ngOnInit() {
    this.getItems();
    this.getWidgets();
  }

  getItems() {
    this.itemsService.all()
      .subscribe(items => this.items = items);
  }

  handleResults(items) {
    this.items = items;
  }

  getWidgets() {
    this.widgetsService.all()
      .subscribe(widgets => this.widgets = widgets);
  }
}
