import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Playground';
  links = [
    {path: '/widget', icon: 'view_quilt', label: 'Widgets'},
    {path: '/review', icon: 'list', label: 'Reviews'}
  ];
}
