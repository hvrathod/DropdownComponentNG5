import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { HttpModule } from '@angular/http';
import {MoviesService} from './movies.service';

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
