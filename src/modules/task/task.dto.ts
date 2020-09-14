import { ArrayNotEmpty, IsNotEmpty, IsNotEmptyObject } from 'class-validator';
import { IsValidateRRule } from '../../common/decorators/IsValidateRRule';

export class TaskDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly job: string;

  @IsNotEmpty()
  readonly currentOwner: string;

  @ArrayNotEmpty()
  readonly owners: string[];

  @IsValidateRRule({ message: 'Invalid rrule' })
  readonly rrule: string;
}
