import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FnlBxComponent } from './fnl-bx.component';

describe('FnlBxComponent', () => {
  let component: FnlBxComponent;
  let fixture: ComponentFixture<FnlBxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FnlBxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FnlBxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
