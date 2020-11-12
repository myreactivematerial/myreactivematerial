import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DrupalSimpleArticleDialogComponent } from './drupal-simple-article-dialog.component';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '../material/material.module';
import { DrupalSimpleArticle } from '../drupal-simple-article';
import { DrupalSimpleArticleAttribute } from '../drupal-simple-article-attribute';

describe('DrupalSimpleArticleDialogComponent', () => {
  let component: DrupalSimpleArticleDialogComponent;
  let fixture: ComponentFixture<DrupalSimpleArticleDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DrupalSimpleArticleDialogComponent,],
      imports: [
        MaterialModule
      ],
      providers:
        [
          {
            provide: MatDialogRef,
            useValue: {}
          },
          {
            provide: MAT_DIALOG_DATA, useValue: createArticle()
          }
        ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrupalSimpleArticleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


export function createArticle(): DrupalSimpleArticle {
  const attributes = new DrupalSimpleArticleAttribute;
  attributes.title = "Hello from Motorola E4";
  attributes.langcode = "en";
  attributes.created = new Date("2020-07-16T02:10:07+00:00");
  attributes.changed = new Date("2020-07-16T02:11:43+00:00");
  attributes.field_simple_article_body = ["First paragraph", "Second paragraph"];
  const article = new DrupalSimpleArticle();
  article.id = "72638783-3fe4-458b-985f-62eb3eb8ad83";
  article.type = "node--simplearticle";
  article.attributes = attributes;
  return article;
}

