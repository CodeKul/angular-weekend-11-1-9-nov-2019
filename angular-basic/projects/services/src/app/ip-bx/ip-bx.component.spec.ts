import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpBxComponent } from './ip-bx.component';

describe('IpBxComponent', () => {
  let component: IpBxComponent;
  let fixture: ComponentFixture<IpBxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpBxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpBxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
