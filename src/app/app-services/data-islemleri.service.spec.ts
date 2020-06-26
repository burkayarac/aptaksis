import { TestBed } from '@angular/core/testing';

import { DataIslemleriService } from './data-islemleri.service';

describe('DataIslemleriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataIslemleriService = TestBed.get(DataIslemleriService);
    expect(service).toBeTruthy();
  });
});
