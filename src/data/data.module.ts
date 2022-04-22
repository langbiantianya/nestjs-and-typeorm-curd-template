import { dataRepository } from './repositories/index';
import { Module } from '@nestjs/common';
// import { AppController } from './controllers/app.controller';
// import { AppService } from './services/app.service';
import { DataController } from './controllers/data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataService } from './services/data.service';
// import { Data } from 'src/entities/data.entity';
import { dataEnities } from './entities';
@Module({
  imports: [TypeOrmModule.forFeature([...dataEnities])],
  controllers: [DataController],
  providers: [DataService],
})
// @Module({
//   imports: [],
//   controllers: [DataController],
//   providers: [AppService],
// })
export class DataModule {}
