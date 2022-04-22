import { Module } from '@nestjs/common';
// import { AppController } from './controllers/app.controller';
// import { AppService } from './services/app.service';
import { DataController } from './controllers/data.controllera.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataService } from './services/data.servicea.service';
// import { Data } from 'src/entities/data.entity';
import { dataEnities } from 'src/entities';
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
