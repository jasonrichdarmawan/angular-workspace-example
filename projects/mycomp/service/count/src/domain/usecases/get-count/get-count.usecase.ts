import { Inject, Injectable, InjectionToken } from '@angular/core';
import { COUNT_REPOSITORY, CountRepository } from '../../repositories/count.repository';

export const GET_COUNT = new InjectionToken<GetCount>("GetCount");

export interface GetCount {
  call(): number;
}

@Injectable()
export class GetCountImpl implements GetCount {

  constructor(
    @Inject(COUNT_REPOSITORY) private repository: CountRepository
  ) { }

  call(): number {
    console.log(GetCountImpl.name, this.call.name);
    return this.repository.get();
  }
}
