import { Component, OnInit } from '@angular/core'
import { WidgetsService } from '../shared'
import { Widget } from '../shared'

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  selectedWidget: Widget;
  widgets: Widget[];

  constructor(private widgetsService: WidgetsService) {}

  widget = 'very widgety'
  colour = 'blue'
  hero = 'Moe'
  heroes = ["Eenie", "Meanie", "Miney", "Moe"]
  

  ngOnInit() {
    this.widgets = this.widgetsService.widgets;
    this.reset();
  }

  reset() {
    this.selectedWidget = { id: null, name: "", description: "" }
  }

  selectWidget(widget){
    this.selectedWidget = widget;
  }
  
  echo(message) {
    console.log("Message:", message);
  }

  saveWidget(widget) {
    console.log('Saving widget: ', widget);
    this.widgets.push(widget);
  }
  
  cancel() {
    this.reset();
  }

}
