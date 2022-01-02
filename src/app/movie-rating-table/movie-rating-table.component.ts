import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-rating-table',
  templateUrl: './movie-rating-table.component.html',
  styleUrls: ['./movie-rating-table.component.scss']
})
export class MovieRatingTableComponent implements OnInit {
  @Input('ratingData') ratingData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
