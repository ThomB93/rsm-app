import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LaugService {

  constructor(private http: Http) { }
  getAllLaug() {
    return this.http.get('/api/laugs')
      .map(res => res.json()); //call this function on each value from http get
  }

}
