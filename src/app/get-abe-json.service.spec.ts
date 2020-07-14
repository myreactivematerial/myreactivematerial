import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { GetAbeJsonService } from './get-abe-json.service';

describe('GetAbeJsonService', () => {
  let service: GetAbeJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(GetAbeJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
