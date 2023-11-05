import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppImageComponent } from './my-app-image.component';

describe('MyAppImageComponent', () => {
  let component: MyAppImageComponent;
  let fixture: ComponentFixture<MyAppImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAppImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
