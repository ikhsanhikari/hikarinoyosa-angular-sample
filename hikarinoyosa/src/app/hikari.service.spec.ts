import { TestBed } from '@angular/core/testing';

import { HikariService } from './hikari.service';

describe('HikariService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HikariService = TestBed.get(HikariService);
    expect(service).toBeTruthy();
  });
});
