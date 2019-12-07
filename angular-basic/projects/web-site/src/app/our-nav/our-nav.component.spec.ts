import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNavComponent } from './our-nav.component';

describe('OurNavComponent', () => {
  let component: OurNavComponent;
  let fixture: ComponentFixture<OurNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
