import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {appConfig} from '../app.config';
import {Review} from '../models/review';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReviewService {

  constructor(private http: HttpClient) { }


  create(review: Review) {
    console.log(review);
    return this.http.post(appConfig.apiUrl + '/api/film', review );
  }

  getAllReviews(): Observable<Review[]> {
    return this.http.get(appConfig.apiUrl + '/api/film')
      .map(res => {
        return res.json().results.map(item => {
          return new Review(

          );
        });
      });
  }

}
