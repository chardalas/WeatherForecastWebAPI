import { TestBed } from '@angular/core/testing';

import { OpenweatherserviceService } from './openweatherservice.service';

describe('OpenweatherserviceService', () => {
  let service: OpenweatherserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenweatherserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
