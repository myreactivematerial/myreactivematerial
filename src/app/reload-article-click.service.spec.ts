import { TestBed } from '@angular/core/testing';

import { ReloadArticleClickService } from './reload-article-click.service';

describe('ReloadArticleClickService', () => {
  let service: ReloadArticleClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadArticleClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
