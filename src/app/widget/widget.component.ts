import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  widget = 'very widgety';
  colour = 'blue';

  constructor() { }

  ngOnInit() {
  }

  echo(message) {
    console.log("Message:", message);
  }
  
}
