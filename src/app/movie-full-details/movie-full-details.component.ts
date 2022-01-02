import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../models/movie.model';

@Component({
  selector: 'app-movie-full-details',
  templateUrl: './movie-full-details.component.html',
  styleUrls: ['./movie-full-details.component.scss']
})
export class MovieFullDetailsComponent implements OnInit {
  hideFields: string[] = ['imdbID', 'imdbID', 'Type','DVD', 'BoxOffice','Response', "Poster"];
  private movieId: string;
  movieData: Movie;
  constructor(private moviesService: MoviesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMovieIdFromRoute();
  }
  getMovieIdFromRoute(): void {
    this.route.params.subscribe(params => {
      this.movieId = params.movieId;
      if(this.movieId) {
        this.fetchDataForMovie();
      }
    });
  }

  private fetchDataForMovie(): void {
    this.moviesService.getDetailsForMovie(this.movieId).subscribe((movieData: Movie) => {
      this.movieData = movieData;
    });
  }
}
