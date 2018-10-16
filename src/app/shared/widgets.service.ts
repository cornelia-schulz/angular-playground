import { Http, Headers, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Widget } from './widget.model';
import { map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

const BASE_URL = 'http://localhost:3000/widgets/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class WidgetsService {
  constructor(private http: Http) { }

  all() {
    return this.http.get(BASE_URL)
      .pipe(map(res => res.json()));
  }

  load(id) {
    return this.http.get(`${BASE_URL}${id}`)
      .pipe(map(res => res.json()));
  }

  create(widget: Widget) {
    return this.http.post(`${BASE_URL}`, JSON.stringify(widget), HEADER)
      .pipe(map(res => res.json()));
  }

  update(widget: Widget) {
    return this.http.patch(`${BASE_URL}${widget.id}`, JSON.stringify(widget), HEADER)
      .pipe(map(res => res.json()));
  }

  delete(widget: Widget) {
    return this.http.delete(`${BASE_URL}${widget.id}`)
      .pipe(map(res => res.json()));
  }

}
