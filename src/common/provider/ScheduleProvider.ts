import { Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';

@Injectable()
export class ScheduleProvider {
  constructor(private schedulerRegistry: SchedulerRegistry) {}

  register(name: string, cron: string) {
    try {
      this.schedulerRegistry.addCronJob(name, cron);
    } catch (e) {
      throw new Error(e);
    }
  }
}
