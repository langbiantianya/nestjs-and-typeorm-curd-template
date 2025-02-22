import { MchntClassEnum } from './../entities/data.entity.enum';
import { Injectable } from '@nestjs/common';
import { DataRepository } from '../repositories/data.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { DataEntity } from '../entities/data.entity';
import {
  Between,
  LessThan,
  LessThanOrEqual,
  Like,
  MoreThanOrEqual,
  Not,
} from 'typeorm';
import { IDataService } from '../interfaces/dataClass.interface';
// import { async } from 'rxjs';

@Injectable()
export class DataService implements IDataService {
  @InjectRepository(DataRepository)
  private readonly dataRepository: DataRepository;

  async saveOrUpdate(data: DataEntity): Promise<void> {
    const date = new Date();
    data.uptDt = this.dateFormat(date, 'yyyy-MM-dd HH:mm:ss');
    data.uptUserId;
    data.uptUserNm;
    data.flag = '1';
    if (!data.pkid) {
      data.crtDt = this.dateFormat(date, 'yyyy-MM-dd HH:mm:ss');
      data.crtUserId;
      data.crtUserNm;
      data.status = 'I';
      data.uptAct = 'I';
      await this.dataRepository.save(data);
    } else {
      data.uptAct = 'U';
      await this.dataRepository.update({ pkid: data.pkid }, data);
    }
  }
  async deleteByid(id: number): Promise<DataEntity> {
    const data = await this.dataRepository.findOne({ pkid: id });
    // await this.dataRepository.delete({ pkid: id });
    data.uptAct = 'D';
    data.flag = '0';
    return this.dataRepository.save(data);
  }
  async deleteByids(ids: string[]): Promise<DataEntity[]> {
    const tempData = await this.dataRepository.findByIds(ids);
    tempData.forEach((item) => {
      item.uptAct = 'D';
      item.flag = '0';
    });
    // console.log(tempData);
    return await this.dataRepository.save(tempData);
    // ids.forEach(async (item) => {
    //   if (item) {
    //     await this.deleteByid(Number(item));
    //   }
    // });
  }
  list(query?: DataEntity): Promise<DataEntity[]> {
    return this.dataRepository.find({
      where: {
        ...((query.cplDtStart &&
          query.cplDtEnd && {
            cplDt: Between(query.cplDtStart, query.cplDtEnd),
          }) ||
          (query.cplDtStart && { cplDt: MoreThanOrEqual(query.cplDtStart) }) ||
          (query.cplDtEnd && { cplDt: LessThanOrEqual(query.cplDtEnd) })),
        ...((query.transDtStart &&
          query.transDtEnd && {
            transDt: Between(query.transDtStart, query.transDtEnd),
          }) ||
          (query.transDtStart && {
            transDt: MoreThanOrEqual(query.transDtStart),
          }) ||
          (query.transDtEnd && { transDt: LessThan(query.transDtEnd) })),
        ...(query.mchntCd && { mchntCd: Like(`%${query.mchntCd}%`) }),
        ...(query.mchntNm && { mchntNm: Like(`%${query.mchntNm}%`) }),
        ...(query.cardId && { cardId: Like(`%${query.cardId}%`) }),
        ...(query.dataSrc && { dataSrc: Like(`%${query.dataSrc}%`) }),
        flag: Not('0'),
      },
      order: {
        pkid: 'ASC',
      },
    });
  }
  async allPage(size): Promise<number> {
    const temp = await this.dataRepository.count({ where: { flag: Not('0') } });
    // temp % size == 0 ? temp / size :
    return Math.ceil(temp / size) == 0 ? 1 : Math.ceil(temp / size);
  }
  info(id: number): Promise<DataEntity> {
    return this.dataRepository.findOne({ pkid: id });
  }
  async page(
    page: number,
    size: number,
    query: DataEntity,
  ): Promise<DataEntity[]> {
    const temp = await this.dataRepository.find({
      where: {
        ...((query.cplDtStart &&
          query.cplDtEnd && {
            cplDt: Between(query.cplDtStart, query.cplDtEnd),
          }) ||
          (query.cplDtStart && { cplDt: MoreThanOrEqual(query.cplDtStart) }) ||
          (query.cplDtEnd && { cplDt: LessThanOrEqual(query.cplDtEnd) })),
        ...((query.transDtStart &&
          query.transDtEnd && {
            transDt: Between(query.transDtStart, query.transDtEnd),
          }) ||
          (query.transDtStart && {
            transDt: MoreThanOrEqual(query.transDtStart),
          }) ||
          (query.transDtEnd && { transDt: LessThan(query.transDtEnd) })),
        ...(query.mchntCd && { mchntCd: Like(`%${query.mchntCd}%`) }),
        ...(query.mchntNm && { mchntNm: Like(`%${query.mchntNm}%`) }),
        ...(query.cardId && { cardId: Like(`%${query.cardId}%`) }),
        ...(query.dataSrc && { dataSrc: Like(`%${query.dataSrc}%`) }),
        flag: Not('0'),
      },
      order: {
        pkid: 'ASC',
      },
      skip: (page != 0 ? page - 1 : 0) * size,
      take: size,
    });
    temp.forEach((item) => {
      item.mchntClassName = MchntClassEnum[item.mchntClass];
    });
    return temp;
  }
  dateFormat(date: Date, fmt) {
    const o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'H+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds(), //毫秒
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length),
      );
    for (const k in o)
      if (new RegExp('(' + k + ')').test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length),
        );
    return fmt;
  }
}
