import { SimpleArticle } from './../simple-article';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrupalSimpleArticleComponent } from './drupal-simple-article.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadingComponent } from '../loading/loading.component';
import { ReloadArticleComponent } from '../reload-article/reload-article.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../material/material.module';
import { DrupalSimpleArticle } from '../drupal-simple-article';
import { DrupalAttribute } from '../drupal-attribute';
import { DrupalSimpleArticleAttribute } from '../drupal-simple-article-attribute';
import { DatePipe } from '@angular/common';

describe('DrupalSimpleArticleComponent', () => {
  let component: DrupalSimpleArticleComponent;
  let fixture: ComponentFixture<DrupalSimpleArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrupalSimpleArticleComponent, LoadingComponent, ReloadArticleComponent, DatePipe],
      imports: [HttpClientTestingModule, MatDialogModule, MaterialModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrupalSimpleArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
