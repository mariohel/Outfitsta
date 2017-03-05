import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Outfit } from './outfit.model';

@Injectable()
export class OutfitsService {

  constructor(private http: Http) { }

  getList(type): Observable<Outfit[]> {
    return this.http.get('assets/data.json')
     // .filter(data => (data as Outfit).outfit_type === "dress")
      .map(response => response.json());

  }
}
