import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../shared';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  constructor(private widgetsService: WidgetsService)

  widget = 'very widgety';
  colour = 'blue';
  hero = 'Moe';
  heroes = ["Eenie", "Meanie", "Miney", "Moe"];
  selectedWidget;
  

  constructor() { }

  ngOnInit() {
  }

  selected(widget){
    this.selectedWidget = widget;
  }
  
  echo(message) {
    console.log("Message:", message);
  }
  
}
