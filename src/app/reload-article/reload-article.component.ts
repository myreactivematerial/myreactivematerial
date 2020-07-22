import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-reload-article',
  templateUrl: './reload-article.component.html',
  styleUrls: ['./reload-article.component.sass']
})
export class ReloadArticleComponent implements OnInit {

  private reloadBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public reloadObservable: Observable<boolean> = this.reloadBehaviorSubject as Observable<boolean>;
  
  constructor(
  ) {
  }

  ngOnInit(): void {
    this.reloadObservable.subscribe((response: boolean) => {
      if (response === true) {
        console.log(`we clicked the button`);
      }
    });
  }

  onClickRefresh(): void {
    this.reloadBehaviorSubject.next(true);
  }

}
