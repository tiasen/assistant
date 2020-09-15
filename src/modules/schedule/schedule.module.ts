import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleEntity } from './schedule.entity';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { TaskModule } from '../task/task.module';

@Module({
  imports: [TaskModule, TypeOrmModule.forFeature([ScheduleEntity])],
  providers: [ScheduleService],
  controllers: [ScheduleController],
})
export class ScheduleModule {}
