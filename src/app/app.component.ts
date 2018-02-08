import { Component } from '@angular/core';
import {PopularMoviesComponent} from './popular-movies/popular-movies.component';
import {MoviesService} from './movies.service';
import {IPopularMovie} from './popularMovie';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie App';
}
