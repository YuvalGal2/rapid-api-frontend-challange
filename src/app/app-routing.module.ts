import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {MovieFullDetailsComponent} from './movie-full-details/movie-full-details.component';
import {FavoritesMoviesComponent} from './favorites-movies/favorites-movies.component';

const routes: Routes = [
  {path: '', component: MainPageComponent },
  {path: 'favorites', component: FavoritesMoviesComponent },
  {path: 'movie/:movieId', component: MovieFullDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
