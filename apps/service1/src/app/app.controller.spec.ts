import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentManagerModule } from '@nx-with-typia/nest-content-manager';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [ContentManagerModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('create', () => {
    it('should success create content', () => {
      const appController = app.get<AppController>(AppController);
      const createContent = { name: 'test', content: 'test' };
      expect(appController.create(createContent)).toEqual({
        id: expect.any(String),
        ...createContent,
      });
    });

    // Its so hard to test this, because i dont know how to test this 😁
    // Its should be success because name is required and minimum length is 3
    it('should fail create content', () => {
      const appController = app.get<AppController>(AppController);
      const createContent = { name: undefined, content: 'test' };
      expect(appController.create(createContent)).toThrow();
    });
  });
});
