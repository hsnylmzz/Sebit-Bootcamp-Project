import { TestBed } from '@angular/core/testing';

import { BlogServiceTsService } from './blog.service.ts.service';

describe('BlogServiceTsService', () => {
  let service: BlogServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
