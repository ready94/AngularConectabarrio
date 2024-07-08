import { TestBed } from '@angular/core/testing';

import { MainConfigurationService } from './main-configuration.service';

describe('MainConfigurationService', () => {
  let service: MainConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
