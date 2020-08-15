import { LoadingService } from './loading.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, interval, Subscription } from 'rxjs';
import { DrupalSimpleArticleData } from './drupal-simple-article-data';
import { DrupalSimpleArticle } from './drupal-simple-article';

@Injectable({
  providedIn: 'root'
})
export class DrupalSimpleArticleService {
  private myBehaviorSubject: BehaviorSubject<DrupalSimpleArticleData>;
  public myObservable$: Observable<DrupalSimpleArticleData>;
  private subscription: Subscription = new Subscription();

  constructor(
    private http: HttpClient,
    private loadingService: LoadingService) {
      const dummyData = this.createDummyData();
      this.myBehaviorSubject = new BehaviorSubject<DrupalSimpleArticleData>(dummyData);
      this.myObservable$ = this.myBehaviorSubject as Observable<DrupalSimpleArticleData>;
    }

  jsonUrl: string = 'https://live-europeanunion.pantheonsite.io/jsonapi/node/simplearticle';

  getPosts(jsonUrl: string = this.jsonUrl): void {
    const myObservable = this.http.get(jsonUrl) as Observable<DrupalSimpleArticleData>;
    this.loadingService.showLoaderUntilCompleted(myObservable).subscribe((response: DrupalSimpleArticleData) => {
      this.myBehaviorSubject.next(response);
    });
  }

  reloadData(loadEveryNSeconds: number):void {
    const source = interval(loadEveryNSeconds * 1000);
    this.subscription = source.subscribe((val: number) => {
      this.getPosts();
    });
  }

  createDummyData(): DrupalSimpleArticleData {
    const dummyData: DrupalSimpleArticleData = new DrupalSimpleArticleData();
    const article: DrupalSimpleArticle = new DrupalSimpleArticle();
    article.id = '0';
    article.type = 'fake';
    article.attributes.changed = new Date();
    article.attributes.created = new Date();
    article.attributes.field_simple_article_body = ['fake'];
    article.attributes.langcode = 'en-US';
    article.attributes.title = 'fake';
    dummyData.data.push(article);
    return dummyData;
  }

}
