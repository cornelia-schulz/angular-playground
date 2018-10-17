import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})

export class ReviewComponent implements OnInit {
  title = 'Review';
  books = ['Book 1', 'Book 2', 'Book 3'];

  constructor() {}
  ngOnInit() {}


}
