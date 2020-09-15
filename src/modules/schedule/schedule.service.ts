import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository, ObjectID, Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ScheduleEntity } from './schedule.entity';
import { SchedulerRegistry } from '@nestjs/schedule';
import { TaskService } from '../task/task.service';
import RRule, { RRuleSet } from 'rrule';
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
      try {
        const rruleStr = task.rrule;
        let rRule = RRule.fromString(rruleStr);
        const nextDate = rRule.after(rRule.options.dtstart, true);
        console.log('nextDate', nextDate);
        const job = new CronJob(nextDate, () => {
          console.log(`Task: ${taskId} is executed!`);
        });
        this.schedulerRegistry.addCronJob(taskId, job);
        job.start();
      } catch (e) {
        console.error(e);
        throw new BadRequestException(`${taskId} is not existing!`);
      }
    }
  }

  async update(id: ObjectID, member: ScheduleEntity) {
    return await this.repository.update(id, member);
  }

  async delete(id: ObjectID) {
    return await this.repository.delete(id);
  }
}
