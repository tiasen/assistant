import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly service: ScheduleService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post(':taskId')
  add(@Param('taskId') taskId: string) {
    return this.service.save(taskId);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectID) {
    return this.service.delete(id);
  }
}
