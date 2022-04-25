import { DataEntity } from '../entities/data.entity';

export interface IDataService {
  saveOrUpdate(data: DataEntity): Promise<void>;
  deleteByid(id: number): Promise<DataEntity>;
  deleteByids(ids: string[]): Promise<DataEntity[]>;
  list(query?: DataEntity): Promise<DataEntity[]>;
  allPage(size): Promise<number>;
  info(id: number): Promise<DataEntity>;
  page(page: number, size: number, query: DataEntity): Promise<DataEntity[]>;
}
