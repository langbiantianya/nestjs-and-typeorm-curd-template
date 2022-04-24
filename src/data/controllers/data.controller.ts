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
    return JsonData.success(await this.dataService.list(data));
  }
  @Get('/page')
  async page(
    @Query('page') page = 1,
    @Query('size') size = 10,
    @Body() query: DataEntity,
  ): Promise<JsonData> {
    return JsonData.success(
      new JsonPage(
        new Page(page, size),
        await this.dataService.page(page, size, query),
      ),
    );
  }
  @Post()
  async save(@Body() data: DataEntity): Promise<JsonData> {
    await this.dataService.saveOrUpdate(data);
    return JsonData.success();
  }
  @Put()
  async update(@Body() data: DataEntity): Promise<JsonData> {
    await this.dataService.saveOrUpdate(data);
    return JsonData.success();
  }
  @Get(':id')
  async info(@Param('id') id: number): Promise<JsonData> {
    return JsonData.success(await this.dataService.info(id));
  }
  @Delete(':ids')
  delete(@Param('ids') ids: string): JsonData {
    this.dataService.deleteByids(ids.split(','));
    return JsonData.success();
    // return ids.split(',');
  }
}
