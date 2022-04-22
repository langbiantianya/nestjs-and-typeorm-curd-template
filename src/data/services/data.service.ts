import { Injectable, Inject } from '@nestjs/common';
import { JsonData } from 'src/util/jsonData';
import { DataRepository } from '../repositories/data.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DataService {
  @InjectRepository(DataRepository)
  private readonly dataRepository: DataRepository;
  getDataList(): JsonData {
    // return new JsonData('??', true, this.dataRepository.list());
    return null;
  }
}
