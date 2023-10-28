import { Test, TestingModule } from '@nestjs/testing';
import { MetroStationsController } from './metro-stations.controller';

describe('MetroStationsController', () => {
  let controller: MetroStationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetroStationsController],
    }).compile();

    controller = module.get<MetroStationsController>(MetroStationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
