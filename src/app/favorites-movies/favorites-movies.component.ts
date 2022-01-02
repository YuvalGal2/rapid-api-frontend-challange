import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../services/movies.service';

@Component({
  selector: 'app-favorites-movies',
  templateUrl: './favorites-movies.component.html',
  styleUrls: ['./favorites-movies.component.scss']
})
export class FavoritesMoviesComponent implements OnInit {
  favoritesMoviesIds: {imdbID:string}[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
   this.fetchFavoritesMovies();
  }
  fetchFavoritesMovies() {
    this.favoritesMoviesIds = this.moviesService.getFavoritesMoviesList();
    this.moviesService.getFavoritesMoviesState().subscribe((res) => {
      this.favoritesMoviesIds = res;
    })
  }

}
