import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppCheckboxComponent } from './my-app-checkbox.component';

describe('MyAppCheckboxComponent', () => {
  let component: MyAppCheckboxComponent;
  let fixture: ComponentFixture<MyAppCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAppCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
