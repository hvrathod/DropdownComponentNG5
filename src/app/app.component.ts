import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie App';


  //Declared the Array of popular movie name
  movieNames = ['The Maze Runner','IT','Minions','Jumanji','Baby Driver'];

}
