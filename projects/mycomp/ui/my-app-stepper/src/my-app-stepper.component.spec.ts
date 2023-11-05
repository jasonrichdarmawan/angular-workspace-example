import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppStepperComponent } from './my-app-stepper.component';

describe('MyAppStepperComponent', () => {
  let component: MyAppStepperComponent;
  let fixture: ComponentFixture<MyAppStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAppStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
