import { TestBed } from '@angular/core/testing';

import { DrupalSimpleArticleService } from './drupal-simple-article.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DrupalSimpleArticleService', () => {
  let service: DrupalSimpleArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DrupalSimpleArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
