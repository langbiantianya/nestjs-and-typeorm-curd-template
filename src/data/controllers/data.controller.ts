import { DataService } from '../services/data.service';
import { JsonData } from '../../util/jsonData';
import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';

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
  dataInfo(@Param() id: number): JsonData {
    return new JsonData('1231', true, id);
  }
  @Delete(':ids')
  delete(@Param() ids: string): string {
    return ids;
  }
}
