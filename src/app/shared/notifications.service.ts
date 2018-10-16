import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NotificationsService {
  private subject = new Subject();
  notifications$ = this.subject.asObservable();

  // Observables have three methods: next, err and complete
  emit(notification) {
    this.subject.next(notification);
  }
}
