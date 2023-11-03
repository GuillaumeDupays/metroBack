import { Test, TestingModule } from '@nestjs/testing';
import { MetrosController } from './metros.controller';

describe('MetrosController', () => {
  let controller: MetrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MetrosController],
    }).compile();

    controller = module.get<MetrosController>(MetrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
