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

  reloadData(loadEveryNSeconds: number): void {
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
    article.attributes.field_simple_article_body = [
      'First of all, I would like to apologize to you. If you are reading this, we were not quick enough',
      'This is just placeholder text and ideally you should never see it. However, if wishes were fishes... back in the real world, this blog has a backend and this is really an exercise to try to figure out a general answer to the problem of dynamic articles in a blog. The blog still has to come from a database and that is an extra call because we do not believe in server-side rendering at all.',
      'Anyway, thank you for reading this fake article. I hope you stay to read the real articles and enjoy them at least as much as you enjoyed this fake article.'
    ];
    article.attributes.langcode = 'en-US';
    article.attributes.title = 'Breaking News: Placeholder text is taking over the world!';
    dummyData.data.push(article);
    return dummyData;
  }

}
