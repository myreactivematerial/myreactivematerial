import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrupalSimpleArticleComponent } from './drupal-simple-article.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoadingComponent } from '../loading/loading.component';
import { ReloadArticleComponent } from '../reload-article/reload-article.component';

describe('DrupalSimpleArticleComponent', () => {
  let component: DrupalSimpleArticleComponent;
  let fixture: ComponentFixture<DrupalSimpleArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DrupalSimpleArticleComponent, LoadingComponent, ReloadArticleComponent],
      imports: [HttpClientTestingModule]
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