import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';
import RRule from 'rrule';
import { isEmpty } from '@nestjs/common/utils/shared.utils';

export function IsValidateRRule(validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidateRRule',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string, args: ValidationArguments) {
          const rule = RRule.parseString(value);
          return Object.keys(rule).length > 0;
        },
      },
    });
  };
}
