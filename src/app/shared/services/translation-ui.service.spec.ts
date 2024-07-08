import { TestBed } from '@angular/core/testing';

import { TranslationUiService } from './translation-ui.service';

describe('TranslationUiService', () => {
  let service: TranslationUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
