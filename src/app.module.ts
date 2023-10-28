import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetroStationsModule } from './metro-stations/metro-stations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetroStationEntity } from './metro-stations/metro-station.entity';
import { GeolocationModule } from './geolocation/geolocation.module';
import { GeolocationsEntity } from './geolocation/geolocation.entity';

@Module({
  imports: [
    MetroStationsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Personne15!',
      database: 'metrodb',
      entities: [MetroStationEntity, GeolocationsEntity],
      synchronize: true,
    }),
    GeolocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
