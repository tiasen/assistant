import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { ObjectID } from 'typeorm';
import { TaskDto } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get('details')
  findAllDetails() {
    return this.taskService.findAllDetails();
  }

  @Post()
  add(@Body() dto: TaskDto) {
    return this.taskService.save(dto);
  }

  @Put(':id')
  update(@Param('id') id: ObjectID, @Body() dto: TaskDto) {
    return this.taskService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectID) {
    return this.taskService.delete(id);
  }
}
