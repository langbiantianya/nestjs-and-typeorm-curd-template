// import { Page } from './../../util/page';
// import { JsonPage } from './../../util/jsonPage';
import { DataEntity } from '../entities/data.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm';

@EntityRepository(DataEntity)
export class DataRepository extends Repository<DataEntity> {
  constructor(
    @InjectRepository(DataEntity)
    private readonly dataRepo?: Repository<DataEntity>,
  ) {
    super();
  }

  // async page(page: Page): Promise<JsonPage> {
  //   return null;
  // }
}
