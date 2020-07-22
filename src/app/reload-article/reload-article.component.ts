import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReloadArticleClickService } from '../reload-article-click.service';

@Component({
  selector: 'app-reload-article',
  templateUrl: './reload-article.component.html',
  styleUrls: ['./reload-article.component.sass']
})
export class ReloadArticleComponent implements OnInit {

  constructor(
    private service: ReloadArticleClickService,
  ) {
  }

  ngOnInit(): void {
  }

  onClickRefresh(): void {
    this.service.onClickRefresh();
  }

}
