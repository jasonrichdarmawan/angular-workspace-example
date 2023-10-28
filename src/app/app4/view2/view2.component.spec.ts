import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View2Component } from './view2.component';
import { NavModule } from '../nav/nav.module';
import { RouterTestingModule } from '@angular/router/testing';
import { GET_COUNT } from '../domain/usecases/get-count/get-count.usecase';
import { SET_COUNT } from '../domain/usecases/set-count/set-count.usecase';

describe('View2Component', () => {
  let component: View2Component;
  let fixture: ComponentFixture<View2Component>;

  beforeEach(async () => {
    const mockGetCount = jasmine.createSpyObj([ 'call' ]);
    const mockSetCount = jasmine.createSpyObj([ 'call' ]);
    await TestBed.configureTestingModule({
      declarations: [ View2Component ],
      imports: [
        RouterTestingModule,
        NavModule,
      ],
      providers: [
        { provide: GET_COUNT, useValue: mockGetCount, },
        { provide: SET_COUNT, useValue: mockSetCount, },
      ]
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
