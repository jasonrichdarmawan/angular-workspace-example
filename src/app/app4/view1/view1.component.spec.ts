import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View1Component } from './view1.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavModule } from '../nav/nav.module';
import { GET_COUNT, GetCountImpl } from '../domain/usecases/get-count/get-count.usecase';
import { SET_COUNT } from '../domain/usecases/set-count/set-count.usecase';

describe('View1Component', () => {
  let component: View1Component;
  let fixture: ComponentFixture<View1Component>;

  beforeEach(async () => {
    const mockGetCount = jasmine.createSpyObj([ 'call' ]);
    const mockSetCount = jasmine.createSpyObj([ 'call' ]);
    await TestBed.configureTestingModule({
      declarations: [ View1Component ],
      imports: [
        RouterTestingModule,
        NavModule,
      ],
      providers: [
        { provide: GET_COUNT, useValue: mockGetCount },
        { provide: SET_COUNT, useValue: mockSetCount },
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
