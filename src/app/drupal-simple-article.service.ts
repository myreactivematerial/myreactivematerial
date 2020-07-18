import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DrupalSimpleArticleData } from './drupal-simple-article-data';

@Injectable({
  providedIn: 'root'
})
export class DrupalSimpleArticleService {

  constructor(private http: HttpClient) { }

  jsonUrl: string = 'https://live-europeanunion.pantheonsite.io/jsonapi/node/simplearticle';

  getPosts(): Observable<DrupalSimpleArticleData> {
    return this.http.get(this.jsonUrl) as Observable<DrupalSimpleArticleData>;
  }
}
