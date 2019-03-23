import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderGoodLineComponent } from './order-good-line.component';

describe('OrderGoodLineComponent', () => {
  let component: OrderGoodLineComponent;
  let fixture: ComponentFixture<OrderGoodLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderGoodLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderGoodLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
