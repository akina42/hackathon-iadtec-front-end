import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateRegisterComponent } from './state-register.component';

describe('StateRegisterComponent', () => {
  let component: StateRegisterComponent;
  let fixture: ComponentFixture<StateRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
