import { Module } from '@nestjs/common';
import { LignesController } from './lignes.controller';
import { LignesService } from './lignes.service';
import { LignesEntity } from './lignes';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LignesEntity])],
  controllers: [LignesController],
  providers: [LignesService],
})
export class LignesModule {}
