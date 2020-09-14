import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JobService } from './job.service';
import { ObjectID } from 'typeorm';
import { JobDto } from './job.dto';

@Controller("job")
export class JobController {

  constructor(private readonly jobService: JobService) {
  }

  @Get()
  findAll(){
    return this.jobService.findAll();
  }

  @Post()
  add(@Body() dto: JobDto){
    return this.jobService.save(dto);
  }

  @Put(":id")
  update(@Param('id') id: ObjectID, @Body() dto: JobDto) {
    return this.jobService.update(id, dto);
  }

  @Delete(":id")
  delete(@Param("id") id: ObjectID) {
    return this.jobService.delete(id);
  }

}