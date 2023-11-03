import { Test, TestingModule } from '@nestjs/testing';
import { LignesService } from './lignes.service';

describe('LignesService', () => {
  let service: LignesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LignesService],
    }).compile();

    service = module.get<LignesService>(LignesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
