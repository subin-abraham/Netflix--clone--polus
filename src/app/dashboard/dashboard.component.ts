import { Component } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private service: ServiceService, private route:Router) {
    this.bannerApi()
    this.trendingMovies()
  }
  bannerApiData: any = []
  trendingMoviesData: any = []
  bannerApi() {
    this.service.bannerApiData().subscribe((result) => {
      this.bannerApiData = result.results;
      // console.log(this.bannerApiData);
    })
  }
  trendingMovies() {
    this.service.trendingMovieData().subscribe((result) => {
      this.trendingMoviesData = result.results
      console.log(this.trendingMoviesData);

    })
  }

}
