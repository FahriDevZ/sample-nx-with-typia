import { Test } from '@nestjs/testing';
import { AppService } from './app.service';
import { ContentManagerModule } from '@nx-with-typia/nest-content-manager';

// im really new, and i dont know how to test this 😁

describe('AppService', () => {
  let service: AppService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      imports: [ContentManagerModule],
      providers: [AppService],
    }).compile();

    service = app.get<AppService>(AppService);
  });

  describe('create', () => {
    it('should success create content', () => {
      const createData = { name: 'test', content: 'test' };
      expect(service.create(createData)).toEqual({
        id: expect.any(String),
        ...createData,
      });
    });
  });
});
