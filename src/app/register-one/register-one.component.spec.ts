import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOneComponent } from './register-one.component';

describe('RegisterOneComponent', () => {
  let component: RegisterOneComponent;
  let fixture: ComponentFixture<RegisterOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
