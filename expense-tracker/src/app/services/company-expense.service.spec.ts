import { TestBed } from '@angular/core/testing';

import { CompanyExpenseService } from './company-expense.service';

describe('CompanyExpenseService', () => {
  let service: CompanyExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
