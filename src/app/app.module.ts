import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './modules/material/material.module';
import { HttpClientModule} from '@angular/common/http';
import { MenuItemComponent } from './nav-bar/menu-item/menu-item.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavItemComponent } from './side-nav/side-nav-item/side-nav-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieListItemComponent } from './movies-list/movie-list-item/movie-list-item.component';
import { MoviePosterComponent } from './movie-poster/movie-poster.component';
import { MovieFullDetailsComponent } from './movie-full-details/movie-full-details.component';
import { MComponent } from './movies-list/movie-list-item/m/m.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    MenuItemComponent,
    SideNavComponent,
    SideNavItemComponent,
    MessageModalComponent,
    MainPageComponent,
    MoviesListComponent,
    MovieListItemComponent,
    MoviePosterComponent,
    MovieFullDetailsComponent,
    MComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MaterialModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
