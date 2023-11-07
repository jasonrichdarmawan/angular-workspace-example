import { InjectionToken } from "@angular/core";

export const COUNT_REPOSITORY = new InjectionToken<CountRepository>("CountRepository");

export interface CountRepository {
    get(): number;
    set(newValue: number): void;
}