import { Injectable } from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {DataService} from './shared/data.service';
import {StateService} from './shared/state.service';
import {Movie} from '../models/movie.model';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class SearchService {
  private readonly env = environment;
  private subscriptions = new Subscription();
  constructor(private dataService: DataService,
              private stateService: StateService) { }


  // use the dataService to send request (using generic function)
  // update the stateService (to link between components and save state)
  // handle http request errors.
    // Use Case: homepage -> search button -> fetch data ||  [DOMAIN]?q=[MOVIE_NAME]
  private fetchDataByQuery(query: string): void {
    this.subscriptions.add(
      this.dataService.sendRequest(`${this.env.moviesDataAPIKey}/movies/`, 'get', {
        title: query
      })
      .subscribe((res: any[]) => {
        this.stateService.setMoviesData(res);
      }, (error) => {
        this.dataService.emitRequestError(error);
      })
    );
  }

  // fetch the data from dataService
  setSearchObserable(query: string): void {
    this.fetchDataByQuery(query);
  }
}
