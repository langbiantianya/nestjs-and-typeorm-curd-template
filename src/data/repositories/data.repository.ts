import { Page } from './../../util/page';
import { JsonPage } from './../../util/jsonPage';
import { Injectable } from '@nestjs/common';
import { DataEntity } from '../entities/data.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// @EntityRepository(DataEntity)
@Injectable()
export class DataRepository {
  constructor(
    @InjectRepository(DataEntity)
    private readonly dataRepo: Repository<DataEntity>,
  ) {}

  async delete(id: number): Promise<void> {
    await this.dataRepo.delete({ pkid: id });
  }
  async saveOrUpdate(data: DataEntity): Promise<boolean> {
    let flag = false;
    if (data.pkid) {
      await this.dataRepo.save(data);
      flag = true;
    } else {
      await this.dataRepo.update({ pkid: data.pkid }, data);
      flag = true;
    }
    return flag;
  }
  async list(): Promise<DataEntity[]> {
    return await this.dataRepo.find();
  }
  async info(id: number): Promise<DataEntity> {
    return await this.dataRepo.findOne({ pkid: id });
  }
  async page(page: Page): Promise<JsonPage> {
    return null;
  }
}
