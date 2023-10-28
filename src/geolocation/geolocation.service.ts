import { Injectable } from '@nestjs/common';
import { GeolocationsEntity } from './geolocation.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GeolocationType } from 'src/types/geolocation.type';

@Injectable()
export class GeolocationService {
  constructor(
    @InjectRepository(GeolocationsEntity)
    private repoGeolocation: Repository<GeolocationsEntity>,
  ) {}

  async getGeolocations(): Promise<GeolocationType[]> {
    return await this.repoGeolocation.find();
  }

  async addMetroStationGeolocation(
    metroStationPosition: GeolocationType,
  ): Promise<GeolocationType> {
    return await this.repoGeolocation.save(metroStationPosition);
  }
}
