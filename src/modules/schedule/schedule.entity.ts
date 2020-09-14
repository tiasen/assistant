import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class ScheduleEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @ObjectIdColumn()
  taskId: ObjectID;
}
