import { Test, TestingModule } from '@nestjs/testing';
import { MetrosService } from './metros.service';

describe('MetrosService', () => {
  let service: MetrosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MetrosService],
    }).compile();

    service = module.get<MetrosService>(MetrosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
