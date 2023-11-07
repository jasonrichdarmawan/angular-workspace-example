import { Inject, Injectable } from '@angular/core';
import { COUNT_DATA_SOURCE, CountDataSource } from '../../datasources/count/count.local.datasource.impl';
import { CountRepository } from '../../../domain/repositories/count.repository';

@Injectable()
export class CountRepositoryImpl implements CountRepository {

  constructor(
    @Inject(COUNT_DATA_SOURCE) private dataSource: CountDataSource,
  ) { }

  get(): number {
    return this.dataSource.get();
  }

  set(newValue: number): void {
    this.dataSource.set(newValue);
  }
}
