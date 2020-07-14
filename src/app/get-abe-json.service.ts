import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAbeJsonService {

  constructor(private http: HttpClient) { }

  abeUrl = 'assets/json/abe.json';

  getAbe() {
    return this.http.get(this.abeUrl);
  }
}
