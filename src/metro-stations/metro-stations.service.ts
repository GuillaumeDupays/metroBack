import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetroStationType } from 'src/types/metro-station.type';
import { MetroStationEntity } from './metro-station.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MetroStationsService {
  constructor(
    @InjectRepository(MetroStationEntity)
    private repoMetroStation: Repository<MetroStationEntity>,
  ) {}

  async getMetroStations(): Promise<MetroStationType[]> {
    return await this.repoMetroStation.find();
  }

  async addMetroStations(
    metroStation: MetroStationType[],
  ): Promise<MetroStationType[]> {
    return await this.repoMetroStation.save(metroStation);
  }

  async addOneMetroStation(
    metroStation: MetroStationType,
  ): Promise<MetroStationType> {
    return await this.repoMetroStation.save(metroStation);
  }
}
