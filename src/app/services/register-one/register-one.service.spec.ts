import { TestBed, inject } from '@angular/core/testing';

import { RegisterOneService } from './register-one.service';

describe('RegisterOneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterOneService]
    });
  });

  it('should be created', inject([RegisterOneService], (service: RegisterOneService) => {
    expect(service).toBeTruthy();
  }));
});
