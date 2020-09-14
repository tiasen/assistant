import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID, Repository } from 'typeorm';
import { Job } from './job.entity';
import { Injectable } from '@nestjs/common';
import { JobDto } from './job.dto';

@Injectable()
export class JobService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: Repository<Job>
  ) {
  }
  async findAll(){
    return await this.jobRepository.find();
  }

  async save(job: JobDto) {
    return await this.jobRepository.save(job);
  }

  async update(id: ObjectID, job: JobDto) {
    return await this.jobRepository.update(id, job);
  }

  async delete(id: ObjectID) {
    return await this.jobRepository.delete(id);
  }
}