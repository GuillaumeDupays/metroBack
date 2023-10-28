import { Module } from '@nestjs/common';
import { GeolocationService } from './geolocation.service';
import { GeolocationController } from './geolocation.controller';
import { GeolocationsEntity } from './geolocation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GeolocationsEntity])],
  providers: [GeolocationService],
  controllers: [GeolocationController],
})
export class GeolocationModule {}
