import { TestBed } from '@angular/core/testing';

import { MultiChoiceDropdownService } from './multi-choice-dropdown.service';

describe('MultiChoiceDropdownService', () => {
  let service: MultiChoiceDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiChoiceDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
