import { Component, OnInit } from '@angular/core';
import { WidgetsService, Widget } from '../shared';

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
    this.getWidgets();
    this.resetSelectedWidget();
  }

  getWidgets(){
    this.widgetsService.all()
      .subscribe(widgets => this.widgets = widgets);
  }

  resetSelectedWidget() {
    this.selectedWidget = { id: null, name: "", description: "" }
  }

  selectWidget(widget){
    this.selectedWidget = widget;
  }

  cancel(widget){
    this.resetSelectedWidget();
  }

  deleteWidget(widget){
    this.widgetsService.delete(widget)
      .subscribe(res => {
        this.getWidgets();
        this.resetSelectedWidget();
      })
  }

  saveWidget(widget) {
    if(!widget.id){
      this.createWidget(widget);
    } else {
      this.updateWidget(widget);
    }
  }
  
  createWidget(widget){
    this.widgetsService.create(widget)
      .subscribe(res => {
        this.getWidgets();
        this.resetSelectedWidget();
      });
  }

  updateWidget(widget){
    this.widgetsService.update(widget)
      .subscribe(res => {
        this.getWidgets();
        this.resetSelectedWidget();
      })
  }

}
