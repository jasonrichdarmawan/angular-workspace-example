import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppProfileComponent } from './my-app-profile.component';

describe('MyAppProfileComponent', () => {
  let component: MyAppProfileComponent;
  let fixture: ComponentFixture<MyAppProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAppProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
