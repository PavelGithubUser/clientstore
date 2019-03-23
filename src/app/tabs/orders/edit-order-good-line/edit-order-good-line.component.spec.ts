import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrderGoodLineComponent } from './edit-order-good-line.component';

describe('EditOrderGoodLineComponent', () => {
  let component: EditOrderGoodLineComponent;
  let fixture: ComponentFixture<EditOrderGoodLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrderGoodLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrderGoodLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
