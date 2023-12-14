import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContentManagerModule } from '@nx-with-typia/nest-content-manager';

@Module({
  imports: [ContentManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
