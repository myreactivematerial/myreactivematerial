import { Component, OnInit, OnDestroy } from '@angular/core';

import { DrupalSimpleArticleService } from '../drupal-simple-article.service';
import { interval, Subscription } from 'rxjs';
import { ReloadArticleClickService } from '../reload-article-click.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-drupal-simple-article',
  templateUrl: './drupal-simple-article.component.html',
  styleUrls: ['./drupal-simple-article.component.sass']
})
export class DrupalSimpleArticleComponent implements OnInit, OnDestroy {

  articles: Array<any> = [];
  private subscription: Subscription = new Subscription();
  constructor(
    private service: DrupalSimpleArticleService,
    private reloadArticleClickService: ReloadArticleClickService,
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
    this.getArticles();
    const source = interval(10000);
    this.subscription = source.subscribe((val: number) => {
      console.log(val);
      this.getArticles();
    });
    this.reloadArticleClickService.reloadObservable.subscribe((response: boolean) => {
      if (response === true) {
        this.getArticles();
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getArticles(): void {
    this.loadingService.showLoaderUntilCompleted(this.service.getPosts()).subscribe((response) => {
      this.articles = response.data.sort((a, b) => (a.attributes.changed > b.attributes.changed) ? -1 : (b.attributes.changed > a.attributes.changed) ? 1 : 0);
    });
  }

}
