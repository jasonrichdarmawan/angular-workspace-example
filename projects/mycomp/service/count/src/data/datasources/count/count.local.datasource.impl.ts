import { Inject, Injectable, InjectionToken } from '@angular/core';

export const COUNT = new InjectionToken<number>("Count");
export const COUNT_DATA_SOURCE = new InjectionToken<CountDataSource>("CountDataSource");

export interface CountDataSource {
  get(): number;
  set(newValue: number): void;
}

@Injectable()
export class CountLocalDataSource implements CountDataSource {
  private count: number;

  constructor(
    @Inject(COUNT) count: number = 0,
  ) {
    this.count = count;
  }

  get(): number {
    return this.count;
  }

  set(newValue: number): void {
    this.count = newValue;
  }
}
