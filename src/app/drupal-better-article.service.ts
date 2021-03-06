import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrupalBetterArticleService {

  constructor(private http: HttpClient) { }

  jsonUrl: string = 'https://live-europeanunion.pantheonsite.io/jsonapi/node/betterarticle';

  getPosts(): Observable<any> {
    return this.http.get(this.jsonUrl) as Observable<any>;
  }
}
