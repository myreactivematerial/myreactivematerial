import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DrupalSimpleArticleTwoComponent } from './drupal-simple-article-two.component';
import { LoadingComponent } from '../loading/loading.component';
import { ReloadArticleComponent } from '../reload-article/reload-article.component';
import { DatePipe } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../material/material.module';

describe('DrupalSimpleArticleTwoComponent', () => {
  let component: DrupalSimpleArticleTwoComponent;
  let fixture: ComponentFixture<DrupalSimpleArticleTwoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DrupalSimpleArticleTwoComponent, LoadingComponent, ReloadArticleComponent, DatePipe],
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
    fixture = TestBed.createComponent(DrupalSimpleArticleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
