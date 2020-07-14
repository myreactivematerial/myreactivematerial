import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostsResponse } from './posts-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAbeJsonService {

  constructor(private http: HttpClient) { }

  abeUrl: string = 'assets/json/abe.json';

  getAbe() {
    return this.http.get(this.abeUrl);
  }

  postsUrl: string = 'assets/json/posts.json';

  getPosts(): Observable<PostsResponse> {
    return this.http.get(this.postsUrl) as Observable<PostsResponse>;
  }

}
