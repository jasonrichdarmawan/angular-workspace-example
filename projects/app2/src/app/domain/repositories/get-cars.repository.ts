import { Observable } from "rxjs";

export const GET_CARS_REPOSITORY = "GetCarsRepository";

export interface GetCarsRepository {
    getCars: () => Observable<string[]>;
}
