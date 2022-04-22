import { Page } from './../../util/page';
import { JsonPage } from './../../util/jsonPage';
import { Injectable } from '@nestjs/common';
import { DataEntity } from '../entities/data.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// @EntityRepository(DataEntity)
@Injectable()
export class DataRepository {
  @InjectRepository(DataEntity)
  private readonly dataRepo: Repository<DataEntity>;

  async delete(id: number): Promise<void> {
    await this.dataRepo.delete({ pkid: id });
  }
  async saveOrUpdate(data: DataEntity): Promise<boolean> {
    return false;
  }
  async list(): Promise<DataEntity[]> {
    return null;
  }
  async info(id: number): Promise<DataEntity> {
    return null;
  }
  async page(page: Page): Promise<JsonPage> {
    return null;
  }
}
