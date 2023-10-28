import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View1Component } from './view1.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavModule } from '../nav/nav.module';
import { GET_CARS_DATA_SOURCE, GetCarsDataSource } from '../data/datasources/get-cars/get-cars.datasource';
import { GET_CARS_REPOSITORY, GetCarsRepository } from '../domain/repositories/get-cars.repository';
import { GET_CARS, GetCars } from '../domain/usecases/get-cars/get-cars.usecase';
import { TransferState } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

// TODO: better mock solution.
class MockGetCarsDataSource implements GetCarsDataSource {
  fetchCars(): Observable<string[]> { return of(['']); }
}

class MockGetCarsRepository implements GetCarsRepository {
  getCars(): Observable<string[]> { return of(['']); }
}

class MockGetCars implements GetCars {
  call(): Observable<string[]> {
    return of(['']);
  }
}

describe('View1Component', () => {
  let component: View1Component;
  let fixture: ComponentFixture<View1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View1Component ],
      imports: [
        RouterTestingModule,
        NavModule
      ],
      providers: [
        { provide: GET_CARS_DATA_SOURCE, useClass: MockGetCarsDataSource },
        { provide: GET_CARS_REPOSITORY, useClass: MockGetCarsRepository },
        TransferState,
        { provide: GET_CARS, useClass: MockGetCars },
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
