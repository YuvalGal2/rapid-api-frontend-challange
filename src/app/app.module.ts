import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule} from '@angular/common/http';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavItemComponent } from './side-nav/side-nav-item/side-nav-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieListItemComponent } from './movies-list/movie-list-item/movie-list-item.component';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { MovieFullDetailsComponent } from './movie-full-details/movie-full-details.component';
import { MovieRatingTableComponent } from './movie-rating-table/movie-rating-table.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AddToFavoritesComponent } from './movies-list/movie-list-item/add-to-favorites/add-to-favorites.component';
import { FavoritesMoviesComponent } from './favorites-movies/favorites-movies.component';
import { FavoriteMovieComponent } from './favorites-movies/favorite-movie/favorite-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SideNavComponent,
    SideNavItemComponent,
    MessageModalComponent,
    MainPageComponent,
    MoviesListComponent,
    MovieListItemComponent,
    MoviePosterComponent,
    MovieFullDetailsComponent,
    MovieRatingTableComponent,
    AddToFavoritesComponent,
    FavoritesMoviesComponent,
    FavoriteMovieComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule,
        ButtonModule,
        SidebarModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
