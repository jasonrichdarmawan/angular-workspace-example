import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

export const GET_CARS_REPOSITORY = new InjectionToken<GetCarsRepository>("GetCarsRepository");

export interface GetCarsRepository {
    getCars: () => Observable<string[]>;
}
