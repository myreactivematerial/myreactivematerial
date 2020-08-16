import { DrupalSimpleArticleData } from './../drupal-simple-article-data';
import { DrupalSimpleArticleService } from './../drupal-simple-article.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drupal-simple-article-two',
  templateUrl: './drupal-simple-article-two.component.html',
  styleUrls: ['./drupal-simple-article-two.component.sass']
})
export class DrupalSimpleArticleTwoComponent implements OnInit {


  articles$: Observable<DrupalSimpleArticleData>

  constructor(
    private service: DrupalSimpleArticleService,
  ) {
    this.articles$ = service.myObservable$;
  }

  ngOnInit(): void {
    this.service.myObservable$.subscribe((response) => {
      if (response.data.length < 2) {
        this.service.getPosts();
      }
    });
    this.articles$ = this.service.myObservable$;
  }

}
