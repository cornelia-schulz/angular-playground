import { Component, OnInit } from '@angular/core';
import { Item, ItemsService } from '../../shared';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Item;
  constructor(private itemsService: ItemsService,
    private route: ActivatedRoute) {}

ngOnInit() {
  // this.route.paramMap.pipe(
  // switchMap((params: ParamMap) =>
  //   this.itemsService.load(params.get('id'))));
  const id = this.route.snapshot.paramMap.get('id');
  this.itemsService.load(id);
}

saveItem(item) {
  console.log('Item saved');
}

cancel(item) {
  // do something
}
}
