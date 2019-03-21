import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgoodComponent } from './addgood.component';

describe('AddgoodComponent', () => {
  let component: AddgoodComponent;
  let fixture: ComponentFixture<AddgoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddgoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
