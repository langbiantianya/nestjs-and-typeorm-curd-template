import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('CPL_DATA')
export class DataEntity {
  @PrimaryGeneratedColumn({ name: 'PKID' })
  pkid: number;
  @Column({ name: 'CPL_DT' })
  // @CreateDateColumn({ name: 'CPL_DT' })
  // @UpdateDateColumn({ name: 'CPL_DT' })
  cplDt: Date;
  cplDtStart: Date;
  cplDtEnd: Date;
  @Column({ name: 'DATA_SRC' })
  dataSrc: string;
  @Column({ name: 'STATUS' })
  status: string;
  @Column({ name: 'BUS_NM' })
  busNm: string;
  @Column({ name: 'MCHNT_NM' })
  mchntNm: string;
  @Column({ name: 'MCHNT_CLASS' })
  mchntClass: string;
  @Column({ name: 'BUS_TP' })
  busTp: string;
  @Column({ name: 'MCHNT_CD' })
  mchntCd: string;
  @Column({ name: 'ADD_INF' })
  addInf: string;
  @Column({ name: 'CPL_USER_NM' })
  cplUserNm: string;
  @Column({ name: 'CARD_ID' })
  cardId: string;
  @Column({ name: 'TRANS_DT' })
  transDt: Date;
  transDtStart: Date;
  transDtEnd: Date;
  @Column({ name: 'TRANS_AT' })
  transAt: number;
  @Column({ name: 'MOBILE_NO' })
  mobileNo: string;
  @Column({ name: 'MSDD_RSN' })
  msddRsn: string;
  @Column({ name: 'CRT_DT' })
  @CreateDateColumn({ name: 'CRT_DT' })
  crtDt: Date;
  @Column({ name: 'CRT_USER_ID' })
  crtUserId: string;
  @Column({ name: 'CRT_USER_NM' })
  crtUserNm: string;
  @Column({ name: 'UPT_DT' })
  @CreateDateColumn({ name: 'UPT_DT' })
  @UpdateDateColumn({ name: 'UPT_DT' })
  uptDt: Date;
  @Column({ name: 'UPT_USER_ID' })
  uptUserId: string;
  @Column({ name: 'UPT_USER_NM' })
  uptUserNm: string;
  @Column({ name: 'UPT_ACT' })
  uptAct: string;
  @Column({ name: 'FLAG' })
  flag: string;
  // cplTimeRange(index: number): string {
  //   return this.cplDt.split(',')[index];
  // }
}
