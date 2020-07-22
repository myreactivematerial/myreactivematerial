import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReloadArticleClickService {

  private reloadBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public reloadObservable: Observable<boolean> = this.reloadBehaviorSubject as Observable<boolean>;
  
  constructor() { }

  onClickRefresh(): void {
    this.reloadBehaviorSubject.next(true);
  }
}
