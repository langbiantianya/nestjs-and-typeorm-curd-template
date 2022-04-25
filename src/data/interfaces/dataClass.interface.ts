import { DataEntity } from '../entities/data.entity';

export interface IDataService {
  saveOrUpdate(data: DataEntity): Promise<void>;
}
