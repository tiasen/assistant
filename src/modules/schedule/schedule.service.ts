import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, ObjectID, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ScheduleEntity } from './schedule.entity';
import { SchedulerRegistry } from '@nestjs/schedule';
import { TaskService } from '../task/task.service';
import RRule from 'rrule';
import { CronJob } from 'cron';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(ScheduleEntity)
    private readonly repository: MongoRepository<ScheduleEntity>,
    private readonly taskService: TaskService,
    private readonly schedulerRegistry: SchedulerRegistry,
  ) {}

  async findAll() {
    return await this.repository.find();
  }

  async save(taskId: string) {
    const task = await this.taskService.findById(taskId);
    if (task) {
      const rruleStr = task.rrule;
      const rRule = RRule.fromString(rruleStr);
      const nextDate = rRule.after(new Date(), true);
      const job = new CronJob(nextDate, () => {});
      this.schedulerRegistry.addCronJob(taskId, job);
    }
    return await this.repository.save(taskId);
  }

  async update(id: ObjectID, member: ScheduleEntity) {
    return await this.repository.update(id, member);
  }

  async delete(id: ObjectID) {
    return await this.repository.delete(id);
  }
}
