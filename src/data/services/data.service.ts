import { Injectable, Inject } from '@nestjs/common';
import { JsonData } from 'src/util/jsonData';
import { DataRepository } from '../repositories/data.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { DataEntity } from '../entities/data.entity';
import { async } from 'rxjs';

@Injectable()
export class DataService {
  @InjectRepository(DataRepository)
  private readonly dataRepository: DataRepository;
  // getDataList(): JsonData {
  //   return new JsonData('??', true, this.dataRepository.list());
  //   // return null;
  // }
  async saveOrUpdate(data: DataEntity): Promise<void> {
    if (data.pkid) {
      await this.dataRepository.update({ pkid: data.pkid }, data);
    } else {
      await this.dataRepository.save(data);
    }
  }
  async deleteByid(id: number): Promise<void> {
    await this.dataRepository.delete({ pkid: id });
  }
  list(): Promise<DataEntity[]> {
    return this.dataRepository.find();
  }
  info(id: number): Promise<DataEntity> {
    return this.dataRepository.findOne({ pkid: id });
  }
}
