import { TestBed } from '@angular/core/testing';

import { AddexpenseService } from './addexpense.service';

describe('AddexpenseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddexpenseService = TestBed.get(AddexpenseService);
    expect(service).toBeTruthy();
  });
});
