import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrupalSimpleArticleDialogComponent } from './drupal-simple-article-dialog.component';

describe('DrupalSimpleArticleDialogComponent', () => {
  let component: DrupalSimpleArticleDialogComponent;
  let fixture: ComponentFixture<DrupalSimpleArticleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrupalSimpleArticleDialogComponent ]
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
