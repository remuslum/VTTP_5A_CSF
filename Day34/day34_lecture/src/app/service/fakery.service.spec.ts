import { TestBed } from '@angular/core/testing';

import { FakeryService } from './fakery.service';

describe('FakeryService', () => {
  let service: FakeryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
