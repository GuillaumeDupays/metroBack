import { Module } from '@nestjs/common';
import { MetrosController } from './metros.controller';
import { MetrosService } from './metros.service';

@Module({
  controllers: [MetrosController],
  providers: [MetrosService]
})
export class MetrosModule {}
