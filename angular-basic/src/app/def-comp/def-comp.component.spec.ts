import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefCompComponent } from './def-comp.component';

describe('DefCompComponent', () => {
  let component: DefCompComponent;
  let fixture: ComponentFixture<DefCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
