import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "../models/movie.model";

@Component({
  selector: 'app-movie-full-details',
  templateUrl: './movie-full-details.component.html',
  styleUrls: ['./movie-full-details.component.scss']
})
export class MovieFullDetailsComponent implements OnInit {

  private movieId: string;
  movieData: Movie;
  constructor(private movieService: MoviesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovieIdFromRoute();
  }
  getMovieIdFromRoute(): void {
    this.route.params.subscribe(params => {
      this.movieId = params.movieId;
      this.fetchDataForMovie();
    });
  }
  private fetchDataForMovie(): void {
    this.movieService.getDetailsForMovie(this.movieId).subscribe((movieData: Movie) => {
      this.movieData = movieData;
    });
  }
}
