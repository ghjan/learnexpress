import { TestBed, inject } from '@angular/core/testing';

import { JumbotronServive } from './jumbotron.service';

describe('JumbotronServive', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JumbotronServive]
    });
  });

  it('should be created', inject([JumbotronServive], (service: JumbotronServive) => {
    expect(service).toBeTruthy();
  }));
});
