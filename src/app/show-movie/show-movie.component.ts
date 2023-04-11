import { Component } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent {
  viewTrailer: any;
  movieDetails: any;
  movieCast: any
  constructor(private service: ServiceService, private router: ActivatedRoute) { }
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId, 'getparamid#');
    this.getVideo(getParamId)
    this.getMovie(getParamId);
    this.getCrewDetails(getParamId);
  }
  getMovie(id: any) {
    this.service.getMovieDetails(id).subscribe(async (result) => {
      console.log(result, 'getmoviedetails#');
      this.movieDetails = result
    });
  }
  getVideo(id: any) {
    this.service.getMovieVideo(id).subscribe((result) => {
      console.log(result.results);
      result.results.forEach((element: any) => {
        if (element.type == 'Trailer') {
          this.viewTrailer = element.key
        }
      });
    })
  }
  getCrewDetails(id: any) {
    this.service.getMovieCast(id).subscribe((result) => {
      this.movieCast = result.cast;
    })
  }

}
