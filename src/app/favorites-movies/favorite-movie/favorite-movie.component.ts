import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/movie.model';
import {MoviesService} from '../../services/movies.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.scss']
})
export class FavoriteMovieComponent implements OnInit {
  @Input('movieId') movieId: any;
  private subscriptions = new Subscription();
  movieDetails: Movie;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.fetchDataForMovieId();
  }
  private fetchDataForMovieId() {
    this.moviesService.getDetailsForMovie(this.movieId).subscribe((moviePayload:Movie) => {
      this.movieDetails = moviePayload
    });
  }
}
