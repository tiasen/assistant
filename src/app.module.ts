import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './modules/member/member.entity';
import { Job } from './modules/job/job.entity';
import { Task } from './modules/task/task.entity';
import { JobModule } from './modules/job/job.module';
import { TaskModule } from './modules/task/task.module';
import { MemberModule } from './modules/member/member.module';
import { ScheduleEntity } from './modules/schedule/schedule.entity';
import { ScheduleModule as AppScheduleModule } from './modules/schedule/schedule.module';
import { ScheduleModule } from '@nestjs/schedule';

const entities = [Job, Member, Task, ScheduleEntity];
const modules = [JobModule, TaskModule, MemberModule, AppScheduleModule];

@Module({
  imports: [
    ...modules,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'assistant',
      entities,
      synchronize: true,
    }),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
