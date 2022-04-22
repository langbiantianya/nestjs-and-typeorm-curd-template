import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('CPL_DATA')
export class DataEntity {
  @PrimaryGeneratedColumn()
  pkid: number;
  @Column()
  cplDt: string;
  @Column()
  dataSrc: string;
  @Column()
  status: string;
  @Column()
  busNm: string;
  @Column()
  mchntNm: string;
  @Column()
  mchntClass: string;
  @Column()
  busTp: string;
  @Column()
  mchntCd: string;
  @Column()
  addInf: string;
  @Column()
  cplUserNm: string;
  @Column()
  cardId: string;
  @Column()
  transDt: string;
  @Column()
  transAt: number;
  @Column()
  mobileNo: string;
  @Column()
  msddRsn: string;
  @CreateDateColumn()
  @UpdateDateColumn()
  crtDt: string;
  @Column()
  crtUserId: string;
  @Column()
  crtUserNm: string;
  @CreateDateColumn()
  @UpdateDateColumn()
  uptDt: string;
  @Column()
  uptUserId: string;
  @Column()
  uptUserNm: string;
  @Column()
  uptAct: string;
  @Column()
  flag: string;
}
