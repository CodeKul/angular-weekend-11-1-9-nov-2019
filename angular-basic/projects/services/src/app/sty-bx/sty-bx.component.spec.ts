import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyBxComponent } from './sty-bx.component';

describe('StyBxComponent', () => {
  let component: StyBxComponent;
  let fixture: ComponentFixture<StyBxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyBxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyBxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
