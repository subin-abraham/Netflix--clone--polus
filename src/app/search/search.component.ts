import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private service: ServiceService) { }
  movieData:any=[]
  movieDetails = new FormGroup({
    'movieName': new FormControl(null)
  });
  searchMovie() {
    this.service.searchMovie(this.movieDetails.value).subscribe((result) => {
      this.movieData = result.results
    })
  }
}
