import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie.model';
import {StateService} from "../services/shared/state.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  moviesList: Movie[];
  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    this.listenForSearch();
  }

  // listen to search is using the state service in order to link between the search component and the movies component
  listenForSearch() {
    this.stateService.getMoviesDataSubject().subscribe((result:any ) => {
      console.log(result);
      if (result.Search.length > 0) {
        return this.moviesList = result.Search
      }
    })
  }
}
