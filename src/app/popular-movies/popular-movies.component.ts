import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../movies.service";
import { IPopularMovie } from "../popularMovie";

@Component({
  selector: "popular-movies-dropdown",
  templateUrl: "./popular-movies.component.html",
  styleUrls: ["./popular-movies.component.css"]
})

export class PopularMoviesComponent {
  selectedMovieTitle: string;
  showDropped: boolean;
  private movies: IPopularMovie[] = [];
  private errorMessage: any = "";

  constructor(private _movieDataService: MoviesService) {
    this.getMovies();
    this.selectedMovieTitle = "";
    this.showDropped = false;
  }

  getMovies() {
    this._movieDataService
      .getData()
      .subscribe(
        movies => (this.movies = movies),
        error => (this.errorMessage = <any>error)
      );
  }

  movieSelected(title: string) {
    this.selectedMovieTitle = title;
    this.toggleDropdown();
  }

  toggleDropdown() {
    this.showDropped = !this.showDropped;
  }

  clearDropDown() {
    this.selectedMovieTitle = "";
  }
}
