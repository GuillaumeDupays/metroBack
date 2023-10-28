import { Module } from '@nestjs/common';
import { MetroStationsController } from './metro-stations.controller';
import { MetroStationsService } from './metro-stations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetroStationEntity } from './metro-station.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MetroStationEntity])],
  controllers: [MetroStationsController],
  providers: [MetroStationsService],
})
export class MetroStationsModule {}
