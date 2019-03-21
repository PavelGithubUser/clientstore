import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditgoodsComponent } from './editgoods.component';

describe('EditgoodsComponent', () => {
  let component: EditgoodsComponent;
  let fixture: ComponentFixture<EditgoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditgoodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditgoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
