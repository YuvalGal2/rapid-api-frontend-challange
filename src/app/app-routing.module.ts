import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {MovieFullDetailsComponent} from './movie-full-details/movie-full-details.component';

const routes: Routes = [
  {path: '', component: MainPageComponent },
  {path: 'movie/:movieId', component: MovieFullDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
