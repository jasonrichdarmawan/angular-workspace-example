import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View2Component } from './view2.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavModule } from '../nav/nav.module';

describe('View2Component', () => {
  let component: View2Component;
  let fixture: ComponentFixture<View2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View2Component ],
      imports: [
        RouterTestingModule,
        NavModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
