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
  @Post('/list')
  async list(@Body() data: DataEntity): Promise<JsonData> {
    // this.dataService.list().then((res) => {});
    return JsonData.success(await this.dataService.list(data));
  }
  @Post('/page')
  async page(
    @Query('page') page = 1,
    @Query('size') size = 10,
    @Body() query: DataEntity,
  ): Promise<JsonData> {
    // console.log(query);
    return JsonData.success(
      new JsonPage(
        new Page(Number(page), size, await this.dataService.allPage(size)),
        await this.dataService.page(page, size, query),
      ),
    );
  }
  @Post()
  async save(@Body() data: DataEntity): Promise<JsonData> {
    console.log(data);

    await this.dataService.saveOrUpdate(data);
    return JsonData.success();
  }
  @Put()
  async update(@Body() data: DataEntity): Promise<JsonData> {
    console.log(data);

    await this.dataService.saveOrUpdate(data);
    return JsonData.success();
  }
  @Get(':id')
  async info(@Param('id') id: number): Promise<JsonData> {
    return JsonData.success(await this.dataService.info(id));
  }
  @Delete(':ids')
  async delete(@Param('ids') ids: string): Promise<JsonData> {
    await this.dataService.deleteByids(ids.split(','));
    return JsonData.success();
    // return ids.split(',');
  }
}
