import { TestBed } from '@angular/core/testing';

import { TokioMarineService } from './tokio-marine.service';

describe('TokioMarineService', () => {
  let service: TokioMarineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokioMarineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
