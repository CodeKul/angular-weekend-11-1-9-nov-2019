import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpsBtnComponent } from './ops-btn.component';

describe('OpsBtnComponent', () => {
  let component: OpsBtnComponent;
  let fixture: ComponentFixture<OpsBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpsBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
