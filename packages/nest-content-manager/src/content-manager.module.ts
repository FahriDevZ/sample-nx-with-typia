import { Module } from '@nestjs/common';
import { ContentManagerService } from './content-manager.service';

@Module({
  providers: [ContentManagerService],
  exports: [ContentManagerService],
})
export class ContentManagerModule {}
