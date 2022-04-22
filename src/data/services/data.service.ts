import { Injectable } from '@nestjs/common';
import { JsonData } from 'src/util/jsonData';
import { DataEntity } from '../entities/data.entity';
@Injectable()
export class DataService {
  getDataList(): JsonData {
    const json = new JsonData();
    const data = new DataEntity();
    const datas: DataEntity[] = [];
    datas.push(data);
    data.busNm = '1231231';
    json.code = true;
    json.message = '12';
    json.data = datas;
    return json;
  }
}
