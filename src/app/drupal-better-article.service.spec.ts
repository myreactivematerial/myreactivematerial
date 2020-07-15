import { TestBed } from '@angular/core/testing';

import { DrupalBetterArticleService } from './drupal-better-article.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DrupalBetterArticleService', () => {
  let service: DrupalBetterArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(DrupalBetterArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
