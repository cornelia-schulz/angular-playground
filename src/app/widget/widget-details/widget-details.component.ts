import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Widget } from '../../shared';

@Component({
  selector: 'app-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.css']
})
export class WidgetDetailsComponent {
  originalName: string;
  selectedWidget: Widget;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  // @Input() widget: Widget;
  // use Object.assign to create a copy of the original state and make it immutable to avoid side effects
  @Input() set widget(value: Widget) {
    if(value) {this.originalName = value.name;}
    this.selectedWidget = Object.assign({}, value)
  }
}
