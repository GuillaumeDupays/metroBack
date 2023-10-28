import { Body, Controller, Get, Post } from '@nestjs/common';
import { MetroStationsService } from './metro-stations.service';
import { MetroStationType } from 'src/types/metro-station.type';
import { GeolocationsEntity } from 'src/geolocation/geolocation.entity';

@Controller('metro-stations')
export class MetroStationsController {
  constructor(private readonly metroStationService: MetroStationsService) {}
  @Get()
  getMetroStations(): Promise<MetroStationType[]> {
    return this.metroStationService.getMetroStations();
  }

  @Post()
  postMetroStations(
    @Body() metroStation: MetroStationType[],
  ): Promise<MetroStationType[]> {
    return this.metroStationService.addMetroStations(metroStation);
  }

  @Post()
  postOneMetroStation(
    @Body() metroStation: MetroStationType,
  ): Promise<MetroStationType> {
    return this.metroStationService.addOneMetroStation(metroStation);
  }
}
