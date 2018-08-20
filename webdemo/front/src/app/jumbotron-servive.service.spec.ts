import { TestBed, inject } from '@angular/core/testing';

import { JumbotronServiveService } from './jumbotron-servive.service';

describe('JumbotronServiveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JumbotronServiveService]
    });
  });

  it('should be created', inject([JumbotronServiveService], (service: JumbotronServiveService) => {
    expect(service).toBeTruthy();
  }));
});
