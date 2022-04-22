import { DataService } from './data.service';
import { JsonData } from '../util/jsonData';
import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';

@Controller('data')
export class DataController {
  constructor(private readonly appService: DataService) {}
  @Get('/list')
  dataList(): JsonData {
    return this.appService.getDataList();
  }
  @Get('/page')
  dataPage(): JsonData {
    return null;
  }
  @Post()
  dataSave(@Body() jsonData: JsonData): JsonData {
    return jsonData;
  }
  @Put()
  dataUpdate(@Body() jsonData: JsonData): JsonData {
    return jsonData;
  }
  @Get(':id')
  dataInfo(@Param() pkid: number): number {
    return pkid;
  }
}
