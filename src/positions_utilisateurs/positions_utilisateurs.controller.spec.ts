import { Test, TestingModule } from '@nestjs/testing';
import { PositionsUtilisateursController } from './positions_utilisateurs.controller';

describe('PositionsUtilisateursController', () => {
  let controller: PositionsUtilisateursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PositionsUtilisateursController],
    }).compile();

    controller = module.get<PositionsUtilisateursController>(PositionsUtilisateursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
