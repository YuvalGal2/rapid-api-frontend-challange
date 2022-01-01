import { Injectable } from '@angular/core';
import {DataService} from './shared/data.service';
import {Observable} from 'rxjs';
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

  isFavoriteMovie(imdbID: string): boolean|void {
    if (this.stateService.getFavoritesMovies().filter((movieObject: any) => movieObject.Key === imdbID).length > 0){
      return true;
    }
  }

  private handleMovieInFavorites(imdbID: string): void {
    const isFavoriteMovie = this.isFavoriteMovie(imdbID);
    this.stateService.toggleMovieToFavorites(isFavoriteMovie ? 'remove' : 'add', imdbID);
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

  emitError(error: any): void {
    this.dataService.emitRequestError(error);
  }

}
