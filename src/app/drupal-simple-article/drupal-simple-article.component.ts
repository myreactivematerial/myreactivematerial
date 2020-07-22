import { Component, OnInit } from '@angular/core';

import {DrupalSimpleArticleService} from '../drupal-simple-article.service';

@Component({
  selector: 'app-drupal-simple-article',
  templateUrl: './drupal-simple-article.component.html',
  styleUrls: ['./drupal-simple-article.component.sass']
})
export class DrupalSimpleArticleComponent implements OnInit {

  articles: Array<any> = [];

  constructor(
    private service: DrupalSimpleArticleService,
  ) { }

  ngOnInit(): void {
    this.onClickRefresh();
  }

  getArticles(): void {
    this.service.getPosts().subscribe((response) => {
      this.articles = response.data.sort((a, b) => (a.attributes.changed > b.attributes.changed) ? -1 : (b.attributes.changed > a.attributes.changed) ? 1 : 0);
    });
  }

  onClickRefresh(): void {
    this.getArticles();
  }

}
