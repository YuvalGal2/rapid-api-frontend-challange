import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent implements OnInit {
  @Input('posterData') posterData: string;
  constructor() { }

  ngOnInit(): void {
    this.checkForValidImage();
  }

  checkForValidImage(): void {
    if (this.posterData === "N/A") {
      this.posterData = "https://i.ibb.co/264r5MM/no-photo.jpg";
    }
  }
}
