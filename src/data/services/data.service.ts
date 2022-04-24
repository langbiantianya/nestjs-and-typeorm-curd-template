import { Page } from './../../util/page';
import { JsonPage } from './../../util/jsonPage';
import { Injectable } from '@nestjs/common';
import { DataRepository } from '../repositories/data.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { DataEntity } from '../entities/data.entity';
import {
  Between,
  LessThan,
  LessThanOrEqual,
  Like,
  MoreThan,
  MoreThanOrEqual,
  Not,
} from 'typeorm';
// import { async } from 'rxjs';

@Injectable()
export class DataService {
  @InjectRepository(DataRepository)
  private readonly dataRepository: DataRepository;
  // getDataList(): JsonData {
  //   return new JsonData('??', true, this.dataRepository.list());
  //   // return null;
  // }
  async saveOrUpdate(data: DataEntity): Promise<void> {
    data.uptDt;
    data.uptUserId;
    data.uptUserNm;
    if (data.pkid) {
      data.crtDt;
      data.crtUserId;
      data.crtUserNm;
      data.uptAct = 'I';
      await this.dataRepository.update({ pkid: data.pkid }, data);
    } else {
      data.uptAct = 'U';
      await this.dataRepository.save(data);
    }
  }
  async deleteByid(id: number): Promise<void> {
    const data = await this.dataRepository.findOne({ pkid: id });
    // await this.dataRepository.delete({ pkid: id });
    data.uptAct = 'D';
    await this.dataRepository.save(data);
  }
  list(query?: DataEntity): Promise<DataEntity[]> {
    return this.dataRepository.find({
      where: {
        ...(query.cplDtStart &&
          query.cplDtEnd && {
            cplDt: Between(query.cplDtStart, query.cplDtEnd),
          }),
        ...(query.cplDtStart && { cplDt: MoreThanOrEqual(query.cplDtStart) }),
        ...(query.cplDtEnd && { cplDt: LessThanOrEqual(query.cplDtEnd) }),
        ...(query.transDtStart &&
          query.transDtEnd && {
            transDt: Between(query.transDtStart, query.transDtEnd),
          }),
        ...(query.mchntCd && { mchntCd: Like(query.mchntCd) }),
        ...(query.mchntNm && { mchntNm: Like(query.mchntNm) }),
        ...(query.cardId && { cardId: Like(query.cardId) }),
        ...(query.dataSrc && { dataSrc: Like(query.dataSrc) }),
        uptAct: Not('D'),
      },
      order: {
        pkid: 'DESC',
      },
    });
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
        ...(query.cplDtStart &&
          query.cplDtEnd && {
            cplDt: Between(query.cplDtStart, query.cplDtEnd),
          }),
        ...(query.cplDtStart && { cplDt: MoreThanOrEqual(query.cplDtStart) }),
        ...(query.cplDtEnd && { cplDt: LessThanOrEqual(query.cplDtEnd) }),
        ...(query.transDtStart &&
          query.transDtEnd && {
            transDt: Between(query.transDtStart, query.transDtEnd),
          }),
        ...(query.mchntCd && { mchntCd: Like(query.mchntCd) }),
        ...(query.mchntNm && { mchntNm: Like(query.mchntNm) }),
        ...(query.cardId && { cardId: Like(query.cardId) }),
        ...(query.dataSrc && { dataSrc: Like(query.dataSrc) }),
        uptAct: Not('D'),
      },
      order: {
        pkid: 'DESC',
      },
      skip: (page != 0 ? page - 1 : 0) * size,
      take: size,
    });

    return temp;
  }
}
