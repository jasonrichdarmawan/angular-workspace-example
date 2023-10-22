import { Observable } from "rxjs";
import { GetCarsRepository } from "../../domain/repositories/get-cars.repository";
import { GET_CARS_DATA_SOURCE, GetCarsDataSource } from "../datasources/get-cars/get-cars.datasource";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class GetCarsRepositoryImpl implements GetCarsRepository {
    constructor(
        @Inject(GET_CARS_DATA_SOURCE) private dataSource: GetCarsDataSource
    ) {
    }

    getCars(): Observable<string[]> {
        return this.dataSource.fetchCars();
    }
}