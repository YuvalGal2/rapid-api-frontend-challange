import {MoviesService} from '../../../services/movies.service';
import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {StateService} from '../../../services/shared/state.service';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit, OnDestroy  {
  @Input('imdbId') imdbId: string;
  private interval: any;
  beenSelectedAsFav: boolean;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.interval = setInterval(() => {
        this.listenToFavChanges();
      },
      300);
  }
  listenToFavChanges(): boolean {
    if (this.moviesService.isFavoriteMovie(this.imdbId)) {
      return this.beenSelectedAsFav = true;
    }
    return this.beenSelectedAsFav = false;
  }

  toggleFavState(): void {
    this.moviesService.toggleFavorites(this.imdbId);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
