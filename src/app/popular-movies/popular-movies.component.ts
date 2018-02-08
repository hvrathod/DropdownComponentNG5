import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';
import {IPopularMovie} from '../popularMovie';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent {

  constructor(private _movieDataService: MoviesService) {
    this.getMovies();
  }

  private movies: IPopularMovie[] = [];
  private errorMessage: any = '';

  getMovies() {
    this._movieDataService.getData().subscribe(
      movies => this.movies = movies,
      error => this.errorMessage = <any>error);
  }

}
