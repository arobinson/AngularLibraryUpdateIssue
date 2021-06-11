import { TestBed } from '@angular/core/testing';

import { ExampleLibraryService } from './example-library.service';

describe('ExampleLibraryService', () => {
  let service: ExampleLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
