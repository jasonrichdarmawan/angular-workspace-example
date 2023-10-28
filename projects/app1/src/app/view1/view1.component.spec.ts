import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View1Component } from './view1.component';
import { GetUsersService } from '../domain/usecases/get-users-service/get-users.service';
import { NavModule } from '../nav/nav.module';
import { GetUsersPipe } from '../domain/usecases/get-users-pipe/get-users.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('View1Component', () => {
  let component: View1Component;
  let fixture: ComponentFixture<View1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        View1Component,
        GetUsersPipe,
      ],
      imports: [
        RouterTestingModule,
        NavModule,
      ],
      providers: [
        GetUsersService,
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
