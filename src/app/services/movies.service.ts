import {Observable} from 'rxjs';
import { Injectable } from '@angular/core';
import {DataService} from './shared/data.service';
import {StateService} from './shared/state.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private readonly env = environment;
  constructor(private dataService: DataService,
              private stateService: StateService) { }


  getDetailsForMovie(movieId: string): Observable<any> {
    return this.dataService.sendRequest(`${this.env.moviesDataAPIKey}/movie/`,'get',{imdbId:movieId});
  }

  // all code below is an extra, for favorites system.
  // the code is talking with the state service to keep track of the system behavior
  // and prevent the need to access directly the state management service
  private handleMovieInFavorites(imdbID: string): void {
    const isFavoriteMovie = this.isFavoriteMovie(imdbID);
    this.stateService.toggleMovieToFavorites(isFavoriteMovie ? 'remove' : 'add', imdbID);
  }
  isFavoriteMovie(imdbID: string): boolean|void {
    if (this.stateService.getFavoritesMovies().filter((movieObject: any) => movieObject.imdbID === imdbID).length > 0){
      return true;
    }
  }
  toggleFavorites(imdbID: string): void {
    this.handleMovieInFavorites(imdbID);
  }
  getFavoritesMoviesState(): Observable<any> {
    return this.stateService.getFavoritesMoviesState();
  }
  getFavoritesMoviesList(): any[] {
    return this.stateService.getFavoritesMoviesAsList();
  }


}
