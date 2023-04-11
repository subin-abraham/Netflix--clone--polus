import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const options = {
  headers: new HttpHeaders
}

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) {
    if (!localStorage.getItem('database')) {
      this.saveData()
    }
    // this.bannerApiData()
  }
  // // API Section

  baseurl = "https://api.themoviedb.org/3";
  apikey = "08cc33bd5ae3a747598ce2ad84376e66";

  // Banner API
  bannerApiData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }
  // Trending Movie API
  trendingMovieData(): Observable<any> {
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }
  // searchmovive
  searchMovie(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`);
  }
  // getmoviedatails
  getMovieDetails(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }
  // getMovieVideo
  getMovieVideo(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
  }
  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }












  data: any = [
    { email: "a", password: "1" },
    { email: "b", password: "2" },
  ]
  saveData() {  //to save data to the local storage  
    if (this.data) {
      localStorage.setItem('database', JSON.stringify(this.data))
    }
  }
  register(email: any, password: any) {
    this.data.push({ email, password })
    this.saveData()
    alert("Register Success")
  }
  login(emailId: any, password: any) {
    let flag = 0
    let userDetails = JSON.parse(localStorage.getItem('database') || '')
    for (let i = 0; i < userDetails.length; i++) {
      if (emailId == userDetails[i].email && password == userDetails[i].password) {
        flag = 1
      }
    }
    if (flag == 1) {
      alert("Login Success")
    }
    else {
      alert("User details error")
    }

  }
}
