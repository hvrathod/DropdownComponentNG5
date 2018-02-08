import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {IPopularMovie} from './popularMovie';

@Injectable()
export class MoviesService {

  constructor(private http: Http) { }

    // http get request to get popular movie title
    getData(): Observable<IPopularMovie[]> {
      return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=de8633e32684238a44c6ca46b93f168b&language=en-US&page=1')
      .map(this.extractData)
      .catch(this.handleError);
    }

   private extractData(res:Response){
     let body = res.json();
     return body.results || [];
   }

   private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
