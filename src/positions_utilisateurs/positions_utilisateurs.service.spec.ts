import { Test, TestingModule } from '@nestjs/testing';
import { PositionsUtilisateursService } from './positions_utilisateurs.service';

describe('PositionsUtilisateursService', () => {
  let service: PositionsUtilisateursService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PositionsUtilisateursService],
    }).compile();

    service = module.get<PositionsUtilisateursService>(PositionsUtilisateursService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
