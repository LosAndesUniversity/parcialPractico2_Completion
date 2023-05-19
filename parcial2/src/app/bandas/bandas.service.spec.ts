/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BandasService } from './bandas.service';

describe('Service: Bandas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandasService]
    });
  });

  it('should ...', inject([BandasService], (service: BandasService) => {
    expect(service).toBeTruthy();
  }));
});
