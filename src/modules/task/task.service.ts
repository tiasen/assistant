import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { ObjectID, MongoRepository } from 'typeorm';
import { TaskDto } from './task.dto';
import { TaskInterface } from './task.interface';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: MongoRepository<Task>,
  ) {}

  async findById(id: string) {
    return await this.taskRepository.findOne(id);
  }

  async findAll() {
    return await this.taskRepository.find();
  }

  async save(dto: TaskDto) {
    return await this.taskRepository.save(dto);
  }

  async update(id: ObjectID, dto: TaskDto) {
    return await this.taskRepository.update(id, dto);
  }

  async delete(id: ObjectID) {
    return await this.taskRepository.delete(id);
  }

  async findAllDetails(): Promise<TaskInterface[]> {
    const cursor = await this.taskRepository.aggregate([
      {
        $lookup: {
          from: 'job',
          localField: 'job',
          foreignField: 'name',
          as: 'job',
        },
      },
      {
        $lookup: {
          from: 'member',
          localField: 'owners',
          foreignField: 'email',
          as: 'owners',
        },
      },
      {
        $lookup: {
          from: 'member',
          localField: 'currentOwner',
          foreignField: 'email',
          as: 'currentOwner',
        },
      },
    ]);
    return await cursor.toArray();
  }
}
