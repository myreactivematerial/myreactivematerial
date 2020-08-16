import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrupalSimpleArticleTwoComponent } from './drupal-simple-article-two.component';

describe('DrupalSimpleArticleTwoComponent', () => {
  let component: DrupalSimpleArticleTwoComponent;
  let fixture: ComponentFixture<DrupalSimpleArticleTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrupalSimpleArticleTwoComponent ]
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
