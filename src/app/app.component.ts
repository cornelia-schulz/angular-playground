import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './shared/notifications.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Playground';
  links = [
    {path: '/home', icon: 'home', label: 'Home'},
    {path: '/items', icon: 'list', label: 'Items'},
    {path: '/widgets', icon: 'view_quilt', label: 'Widgets'},
    {path: '/review', icon: 'list', label: 'Reviews'}
  ];

  constructor(private ns: NotificationsService,
              private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.ns.notifications$
      .subscribe(notification => this.showNotification(notification));
  }

  showNotification(notification) {
    this.snackBar.open(notification, 'OK', {
      duration: 3000
    });
  }

}
