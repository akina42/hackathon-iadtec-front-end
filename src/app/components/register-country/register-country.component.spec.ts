import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCountryComponent } from './register-country.component';

describe('RegisterCountryComponent', () => {
  let component: RegisterCountryComponent;
  let fixture: ComponentFixture<RegisterCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
