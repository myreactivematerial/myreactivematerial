import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DrupalBetterArticleComponent } from './drupal-better-article.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DrupalBetterArticleComponent', () => {
  let component: DrupalBetterArticleComponent;
  let fixture: ComponentFixture<DrupalBetterArticleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DrupalBetterArticleComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrupalBetterArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
