import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View1Component } from './view1.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavModule } from '../nav/nav.module';

describe('View1Component', () => {
  let component: View1Component;
  let fixture: ComponentFixture<View1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View1Component ],
      imports: [
        RouterTestingModule,
        NavModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
