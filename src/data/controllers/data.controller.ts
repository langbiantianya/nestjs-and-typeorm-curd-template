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
  list(): JsonData {
    return this.dataService.getDataList();
  }
  @Get('/page')
  page(): JsonData {
    return null;
  }
  @Post()
  save(@Body() jsonData: JsonData): JsonData {
    return jsonData;
  }
  @Put()
  update(@Body() jsonData: JsonData): JsonData {
    return jsonData;
  }
  @Get(':id')
  info(@Param('id') id: number): JsonData {
    return new JsonData('1231', true, id);
  }
  @Delete(':ids')
  delete(@Param('ids') ids: number[]): number[] {
    return ids;
  }
}
