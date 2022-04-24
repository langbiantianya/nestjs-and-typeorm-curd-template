import { JsonPage } from './../../util/jsonPage';
import { Page } from './../../util/page';
import { DataEntity } from '../entities/data.entity';
import { DataService } from '../services/data.service';
import { JsonData } from '../../util/jsonData';
import {
  Controller,
  Get,
  Post,
  Inject,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';

@Controller('data')
export class DataController {
  constructor(@Inject(DataService) private readonly dataService: DataService) {}
  @Get('/list')
  async list(@Body() data: DataEntity): Promise<JsonData> {
    // this.dataService.list().then((res) => {});
    return new JsonData('', true, await this.dataService.list(data));
  }
  @Get('/page')
  async page(
    @Query('page') page = 1,
    @Query('size') size = 10,
    @Body() query: DataEntity,
  ): Promise<JsonData> {
    return new JsonData(
      '',
      true,
      new JsonPage(
        new Page(page, size),
        await this.dataService.page(page, size, query),
      ),
    );
  }
  @Post()
  async save(@Body() data: DataEntity): Promise<JsonData> {
    await this.dataService.saveOrUpdate(data);
    return new JsonData('', true);
  }
  @Put()
  async update(@Body() data: DataEntity): Promise<JsonData> {
    await this.dataService.saveOrUpdate(data);
    return new JsonData('', true);
  }
  @Get(':id')
  info(@Param('id') id: number): Promise<DataEntity> {
    return this.dataService.info(id);
  }
  @Delete(':ids')
  delete(@Param('ids') ids: number[]): number[] {
    return ids;
  }

  // cls<T>(value: Type<T>) {
  //   const ctx: any = new value();

  //   console.log(Object.keys(ctx));

  //   const prototype = Object.getPrototypeOf(ctx);
  //   console.log(Reflect.ownKeys(prototype));
  //   console.log(Object.getOwnPropertyDescriptor(prototype, 'echo'));

  //   console.log(Object.getOwnPropertyDescriptor(prototype, 'info'));
  // }
}

// interface Type<T> extends Function {
//   new (...args: any[]): T;
// }
