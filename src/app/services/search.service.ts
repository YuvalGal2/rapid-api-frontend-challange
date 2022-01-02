import { Subscription} from 'rxjs';
import {Injectable, OnDestroy} from '@angular/core';
import {DataService} from './shared/data.service';
import {StateService} from './shared/state.service';
import {environment} from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})

export class SearchService implements OnDestroy{
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

  // better memory management
  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
