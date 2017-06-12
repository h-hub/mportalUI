/**
 * Created by bjayamanna on 6/8/2017.
 */
import { Component } from '@angular/core';

import { Movie } from '../movie/movie';

@Component({
  selector: 'app-create-movie',
  templateUrl: '/create-movie.component.html',
  styleUrls: ['/create-movie.component.css']
})
export class CreateMovieComponent {
    
    genres = [
               {name:'Action', value:'Action', checked:false},
               {name:'Adventure', value:'Adventure', checked:false},
               {name:'Comedy', value:'Comedy', checked:false},
               {name:'Crime', value:'Crime', checked:false},
               {name:'Drama', value:'Drama', checked:false},
               {name:'Fantasy', value:'Fantasy', checked:false},
               {name:'Horror', value:'Horror', checked:false},
             ]
    
    get selectedOptions() { // right now: ['1','3']
        return this.genres
                  .filter(opt => opt.checked)
                  .map(opt => opt.value)
      }
    
  model = new Movie('', '', '', '', '', '');

  submitted = false;
  onSubmit() { this.submitted = true; }
  
  get diagnostic() { return JSON.stringify(this.model); }
}
