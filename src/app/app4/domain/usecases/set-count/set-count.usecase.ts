import { Inject, Injectable, InjectionToken } from '@angular/core';
import { COUNT_REPOSITORY, CountRepository } from '../../repositories/count.repository';

export const SET_COUNT = new InjectionToken<SetCount>("SetCount");

export interface SetCount {
  call(newValue: number): void;
}

@Injectable()
export class SetCountImpl implements SetCount {

  constructor(
    @Inject(COUNT_REPOSITORY) private repository: CountRepository
  ) { }

  call(newValue: number): void {
    console.log(SetCountImpl.name, this.call.name)
    return this.repository.set(newValue);
  }
}
