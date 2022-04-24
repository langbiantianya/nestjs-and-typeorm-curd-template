import { async } from 'rxjs';
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
} from '@nestjs/common';

@Controller('data')
export class DataController {
  constructor(@Inject(DataService) private readonly dataService: DataService) {}
  @Get('/list')
  async list(): Promise<JsonData> {
    // this.dataService.list().then((res) => {});
    return new JsonData('', true, await this.dataService.list());
  }
  @Get('/page')
  page(): JsonData {
    return null;
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
  info(@Param('id') id: number): JsonData {
    return this.info(id);
  }
  @Delete(':ids')
  delete(@Param('ids') ids: number[]): number[] {
    return ids;
  }
}
