import { Test, TestingModule } from '@nestjs/testing';
import { LignesController } from './lignes.controller';

describe('LignesController', () => {
  let controller: LignesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LignesController],
    }).compile();

    controller = module.get<LignesController>(LignesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
