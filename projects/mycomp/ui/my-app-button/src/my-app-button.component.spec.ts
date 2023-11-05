import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppButtonComponent } from './my-app-button.component';

describe('MyAppButtonComponent', () => {
  let component: MyAppButtonComponent;
  let fixture: ComponentFixture<MyAppButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAppButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
