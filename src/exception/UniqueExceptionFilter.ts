import { ArgumentsHost, Catch, BadRequestException } from '@nestjs/common';
import { ExceptionFilter } from '@nestjs/common/interfaces/exceptions/exception-filter.interface';
import { BulkWriteError } from 'mongodb';
import { ExceptionCode } from '../common/constants/ExceptionCode';

@Catch(BulkWriteError)
export class UniqueExceptionFilter implements ExceptionFilter {
  catch(exception: BulkWriteError, host: ArgumentsHost): any {
    if (exception.code === ExceptionCode.UniqueColumn) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const message = exception.message.match(/{(.*)}/)[0];

      response.status(400).json({
        statusCode: 400,
        timestamp: new Date().toISOString(),
        message: `Duplicate Value: ${message}`,
      });
    }
  }
}