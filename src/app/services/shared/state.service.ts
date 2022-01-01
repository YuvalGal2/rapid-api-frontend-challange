import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private favoritesMoviesSubject: Subject<{}> = new Subject<{}>();
  private MoviesDataSubject = new Subject<any[]>();
  private sideNavObs = new Subject<boolean>();

  private  favoritesMovies: any = [];
  private sideNavState: boolean;

  constructor() {
    this.sideNavState = false;
  }

  // note: optional array because the state might get trigger of empty array in case of no movies found..
  setMoviesData(MoviesData?: any[] ): void {
    this.MoviesDataSubject.next(MoviesData);
  }

  getMoviesDataSubject(): Observable<any[]> {
    return this.MoviesDataSubject;
  }

  setSideNavState(openState: boolean = this.sideNavState): void {
    if (openState === undefined) {
      this.sideNavObs.next(openState);
      this.sideNavState = openState;
    }
    else {
      // if not asked for specific state, toogle it.
      this.sideNavObs.next(!openState);
      this.sideNavState = !openState;
    }
  }
  getSideNavState(): Observable<boolean> {
    return this.sideNavObs;
  }




  // this will help manage the state for the favorite movies list (in local storage).
  private getFavoritesMoviesFromStorage(): any[] {
    const favoritesMovieStorage = localStorage.getItem('favoritesMovies');
    if (favoritesMovieStorage === null ) {
      return [];
    }
    const values = JSON.parse(favoritesMovieStorage);
    if (values instanceof Array) {
      return values;
    }
    return Array(values);

  }

  // for first load, get the status of the favorites
  getFavoritesMovies(): string[]{
    this.favoritesMovies = this.getFavoritesMoviesFromStorage();
    this.setFavoritesMoviesState();
    return this.favoritesMovies;
  }
  setFavoritesMoviesState(): void {
    this.favoritesMoviesSubject.next(this.favoritesMovies);
  }

  // subscribe to this function to get the favoritesMovies from the subject
  getFavoritesMoviesState(): Subject<{}> {
    return this.favoritesMoviesSubject;
  }

  // in case you want to get the same list of favoritesMovies but as a list - it won't update in real time.
  getFavoritesMoviesAsList(): string[] {
    return this.favoritesMovies;
  }

  // remove movie from the favoritesMovies
  private removeMovieFromFavorites(imdbID: string): string[]  {
    const currentFavs = this.getFavoritesMoviesFromStorage();
    this.favoritesMovies = currentFavs.filter((fav) => fav.imdbID.toString() !== imdbID.toString());
    return this.favoritesMovies;
  }

  // add movie to the fav
  private addMovieToFavorites(imdbID: string): void {
    this.favoritesMovies.push({imdbID});
  }

  // main function which controls which operation to do
  toggleMovieToFavorites(action: string, imdbID: string): void {
      switch (action) {
        case 'remove':
         const newFavorites = this.removeMovieFromFavorites(imdbID);
         localStorage.setItem('favoritesMovies',JSON.stringify(newFavorites));
         break;
        case 'add':
          this.addMovieToFavorites(imdbID);
          localStorage.setItem('favoritesMovies',JSON.stringify(this.favoritesMovies));
          break;
      }
      this.setFavoritesMoviesState();
  }
}
