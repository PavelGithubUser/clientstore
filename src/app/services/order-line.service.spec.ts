import { TestBed } from '@angular/core/testing';

import { OrderLineService } from './order-line.service';

describe('OrderLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderLineService = TestBed.get(OrderLineService);
    expect(service).toBeTruthy();
  });
});
