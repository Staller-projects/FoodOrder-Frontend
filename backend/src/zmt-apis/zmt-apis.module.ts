import { Module } from '@nestjs/common';
import { ZmtApisController } from './zmt-apis.controller';

@Module({
  controllers: [ZmtApisController]
})
export class ZmtApisModule {}
