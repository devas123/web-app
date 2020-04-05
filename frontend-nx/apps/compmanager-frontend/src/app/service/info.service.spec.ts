import {inject, TestBed} from '@angular/core/testing';

import {InfoService} from './info.service';
import {HttpClientModule} from '@angular/common/http';

describe('InfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [InfoService]
    });
  });

  it('should be created', inject([InfoService], (service: InfoService) => {
    expect(service).toBeTruthy();
  }));
});
