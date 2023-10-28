import { Test, TestingModule } from '@nestjs/testing';
import { MetroStationsService } from './metro-stations.service';

describe('MetroStationsService', () => {
  let service: MetroStationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetroStationsService],
    }).compile();

    service = module.get<MetroStationsService>(MetroStationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
