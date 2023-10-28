import { Body, Controller, Get, Post } from '@nestjs/common';
import { GeolocationService } from './geolocation.service';
import { GeolocationType } from 'src/types/geolocation.type';

@Controller('geolocations')
export class GeolocationController {
  constructor(private readonly geolocationService: GeolocationService) {}
  @Get()
  getMetroStations(): Promise<GeolocationType[]> {
    return this.geolocationService.getGeolocations();
  }

  @Post()
  addMetroStationPosition(
    @Body() metroStationPosition: GeolocationType,
  ): Promise<GeolocationType> {
    return this.geolocationService.addMetroStationGeolocation(
      metroStationPosition,
    );
  }
}
